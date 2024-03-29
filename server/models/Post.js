import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        userPicturePath: {
            type: String,
            default: "",
         },
        picturePath: {
            type: String,
            default: "",
         },
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        }
    },{
        timestamps: true,
    }
)

const Post = mongoose.model("Post", postSchema);

export default Post;




