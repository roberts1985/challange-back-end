import { Post } from '../models/post.model.js'

// Use Cases = Handlers

const createPost = async (postData) => {
    const {title, content, tags, user_id} = postData
    return  Post.create({title, content, tags, user_id})
}

const getPosts = async () => {
    return Post.find().populate({ path: 'user_id', select: 'name' })
}

const getPostById = async (id) => {
    return Post.findById(id)
}

const updatePostById = async (id, newData, options = {}) => {
    return Post.findByIdAndUpdate(id, newData, {new: true, ...options})
}

const removePostById = async (id) => {
    return Post.findByIdAndDelete(id)
}

export { 
    createPost, 
    updatePostById, 
    getPosts, 
    getPostById, 
    removePostById
 }