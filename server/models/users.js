const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    {
        firstName: 'Moshe',
        lastName: 'Plotkin',
        handle: '@JewPaltz',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
        password: 'me',
        isAdmin: true,
        email: "plotkinm@newpaltz.edu",
        following: [{ handle: '@vp', isApproved: true }, { handle: '@johnsmith', isApproved: true }]
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: '@vp',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
        password: 'Her',
        isAdmin: true,
        email: "vp@wh.com",
        following: [{ handle: '@johnsmith', isApproved: true }, { handle: '@JewPaltz', isApproved: true }]
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        handle: '@johnsmith',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
        password: 'BeepBop',
        isAdmin: true,
        email: "john@smith.com",
        following: [{ handle: '@vp', isApproved: true },],
    },

];

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Get = user_id => collection.findOne({ _id: new ObjectId(user_id) })

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x => ({ ...x, password: undefined }));


module.exports.Register = async function Register(user) {
    console.log('Registering user:', user);
    if (!user.firstName) {
        return Promise.reject({ code: 422, msg: "First Name is required" })
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)


    user.password = hash;

    const user2 = await collection.insertOne(user);
    user._id = user2.insertedId;

    const data = { ...user, password: undefined };

    return { user: data };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(user_id) },
        { $set: user },
        { returnDocument: 'after' }
    );
    console.log({ user_id, results });

    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({ _id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Login = async function Login(handle, password) {
    console.log({ handle, password })
    const user = await collection.findOne({ handle });
    if (!user) {
        return Promise.reject({ code: 401, msg: "Sorry there is no user with that handle" });
    }

    const result = await bcrypt.compare(password, user.password)

    if (!result) {
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };


}

module.exports.Seed = async function Seed() {
    collection.deleteMany();
    for (const user of list) {
        await module.exports.Register(user);
    }
}