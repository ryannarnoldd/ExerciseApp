const Users = require('./users');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;

const list = [
    { 
        src: "https://www.chicagotribune.com/resizer/nnQ3bY7X6794G-zAJXp13d4r4nI=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7UZXJVP42VG5VISQNDAUKHJDJQ.jpg",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
    },
    { 
        src: "https://www.chicagotribune.com/resizer/nnQ3bY7X6794G-zAJXp13d4r4nI=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7UZXJVP42VG5VISQNDAUKHJDJQ.jpg",
        alt: "Placeholder image",
        caption: "We want Moshiach NOW PLEASE!",
        time: Date(),
        user_handle: "@vp",
        isPublic: true,
    },
    { 
        src: "https://www.chicagotribune.com/resizer/nnQ3bY7X6794G-zAJXp13d4r4nI=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7UZXJVP42VG5VISQNDAUKHJDJQ.jpg",
        alt: "Purim in SUB #100",
        caption: "What a purim to remember",
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        src: "https://www.chicagotribune.com/resizer/nnQ3bY7X6794G-zAJXp13d4r4nI=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7UZXJVP42VG5VISQNDAUKHJDJQ.jpg",
        alt: "Mug with slogan",
        caption: "Never be afraid to try something new. The ark was built by amateurs and the Titanic by professionals",
        time: Date(),
        user_handle: "@JewPaltz",
        isPublic: true,
    },
    { 
        src: "https://www.chicagotribune.com/resizer/nnQ3bY7X6794G-zAJXp13d4r4nI=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7UZXJVP42VG5VISQNDAUKHJDJQ.jpg",
        alt: "The family",
        caption: "The whole family. All the kids hiking together. Sukkot Vacation.",
        time: Date(),
        user_handle: "@JewPaltz",
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

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}

module.exports.GetFeed = async function (handle) {
    const user = await Users.collection.findOne({ handle });
    if (!user) { throw { code: 404, msg: "User not found" } }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     ].concat(addOwnerPipeline));
    return query.toArray();
}

module.exports.Get = function Get(post_id) { 
    return collection.findOne({_id: new ObjectId(post_id) }); 
}

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    
    const response = await collection.insertOne(post);
    
    post.id = response.insertedId;

    return { ...post };
}

module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(post_id) }, 
        { $set: post },
        { returnDocument: 'after'}
    );

    return results.value;
}

module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(post_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    collection.deleteMany();
    for (const x of list) {
        await this.Add(x)
    }
}