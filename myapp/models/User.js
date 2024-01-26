import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    bio: {
        type: String,
        min: 4,
        max: 50
    },
    profilePic: {
        type: String,
    },
    coverPic: {
        type: String,
    },
    followings: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: []
    }
}, { timestamps: true })

export default mongoose?.models?.User || mongoose.model("User", UserSchema)