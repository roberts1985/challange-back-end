import { User } from '../models/user.model.js'
import { Post } from '../models/post.model.js'
import { Comment } from '../models/comment.model.js'

const commentUser = Post.findOne({ title}).populate('name').exec(function(err, post) {
    if (err) return handleError(err);
    console.log('The writer is %s', post.user.name);
  });

  const getComments = () => {
    return Comment.find()
}

const getCommentById = (id) => {
    return Comment.findById(id)
}

const updateCommentById = (id, commentData, options = {})=>{
    return Comment.findByIdAndUpdate(id, commentData, {new: true, ...options})
}

const deleteCommentById = (id) => {
    return Comment.findByIdAndDelete(id)
}

export {
    getComments,
    getCommentById,
    updateCommentById,
    deleteCommentById
}