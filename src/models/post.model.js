import mongoose, {Schema} from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 1000,
        trim: true
    },
    tags: {
        type: [String]
    },
    content: {
        type:String,
        minLength: 10,
        maxLength: 3000,
        trim: true,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId, ref: 'users'
    }
})

const Post = mongoose.model('posts', postSchema)

export { Post }
