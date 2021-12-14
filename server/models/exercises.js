const Users = require( "./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('exercises');
module.exports.collection = collection;

const list = [
    { 
        title: "I ran so much today.",
        type: "Running",
        calories: 450,
        duration: 30,
        time: Date(),
        user_handle: "@vp",
        isPublic: true,
    },
    { 
        title: "My bike went vroom.",
        type: "Cycling",
        calories: 287,
        duration: 45,
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        title: "My bike broke this morning.",
        type: "Cycling",
        calories: 112,
        duration: 10,
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        title: "I kicked the ball in the cold weather.",
        type: "Soccer",
        calories: 400,
        duration: 67,
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
    },
    { 
        title: "Slapped paddles with Chris",
        type: "Table Tennis",
        calories: 798,
        duration: 125,
        time: Date(),
        user_handle: "@vp",
        isPublic: true,
    },
];

const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetLog = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}

module.exports.GetAllLog = async function (handle) {
    const user = await Users.collection.findOne({ handle });
    if (!user) { throw { code: 404, msg: "User not found" } }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     ].concat(addOwnerPipeline));
    return query.toArray();
}

module.exports.Get = function Get(exercise_id) { 
    return collection.findOne({_id: new ObjectId(exercise_id) }); 
}

module.exports.Add = async function Add(exercise) {
    if(!exercise.user_handle){
        throw {code: 422, msg: "Exercise must have an Owner"}
    }
    exercise.time = Date();
    
    const response = await collection.insertOne(exercise);
    
    exercise.id = response.insertedId;

    return { ...exercise };
}

module.exports.Update = async function Update(exercise_id, exercise) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(exercise_id) }, 
        { $set: exercise },
        { returnDocument: 'after'}
    );

    return results.value;
}

module.exports.Remove = async function Delete(exercise_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(exercise_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ description: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        collection.deleteMany();
        await this.Add(x)
    }
}