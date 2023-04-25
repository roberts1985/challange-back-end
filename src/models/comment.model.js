import mongoose, {Schema} from "mongoose"

const commentSchema = new mongoose.Schema({
    content: {
        type:String,
        minLength: 20,
        maxLength: 300,
        trim: true
    },
    comment_date: {
        type: Date
        //required: true
    },
    post_id: {
        type: Schema.Types.ObjectId, ref: 'Post'
    }, 
    user_id: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
})

const Comment = mongoose.model('comments', commentSchema)

export { Comment }