import { Comment } from '../models/comment.model.js'


const createComment = async (commentData) => {
    const { content, comment_date, user_id } = commentData
    return Comment.create({ content, comment_date, user_id })
}

const getComments = async () => {
    return Comment.find().populate({
        path: 'user_id',
        select:'name',
    })
}

const getCommentById = async (id) => {
    return Comment.findById(id)
}

const updateCommentById = async (id, commentData, options = {}) => {
    return Comment.findByIdAndUpdate(id, commentData, { new: true, ...options })
}

const deleteCommentById = async (id) => {
    return Comment.findByIdAndDelete(id)
}

export {
    createComment,
    getComments,
    getCommentById,
    updateCommentById,
    deleteCommentById
}