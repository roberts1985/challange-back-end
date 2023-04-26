import mongoose, { Schema } from "mongoose"

const commentSchema = new mongoose.Schema({
    content: {
        type:String,
        minLength: 20,
        maxLength: 1000,
        trim: true
    },
    comment_date: {
        type: Date

    },
    post_id: {
        type: Schema.Types.ObjectId, ref: 'posts'
    }, 
    user_id: {
        type: Schema.Types.ObjectId, ref: 'users'
    }
})

const Comment = mongoose.model('comments', commentSchema)

export { Comment }