const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;



function FollowFriend(follower, followee) {
    return collection.updateOne(
        { handle: follower, "following.handle": { $ne: followee} },
        { $addToSet : { following: { handle: followee, isApproved: false } } }
    );
}


function UnFollowFriend(follower, followee) {
    return collection.updateOne(
        { handle: follower },
        { $pull : { following: { handle: followee } } }
    );    
}

function ApproveFollower(follower, followee, shouldApprove) {
    return collection.updateOne(
        { handle: follower, "following.handle": followee },
        { $set : { "following.$.isApproved": shouldApprove } }
    );  
}


function GetAllFollowers(followee) {
    return []
}

module.exports = {
    Follow, UnFollow, Approve, 
}