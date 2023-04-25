import { Post } from '../models/post.model.js'

// Use Cases = Handlers

const createPost = async (postData) => {
    const {title, content, tags, user_id} = postData
    return  Post.create({title, content, tags, user_id})
}

const getPosts = async () => {
    return Post.find()
}

const getPostById = async (id) => {
    return Post.findById(id)
}


const updatePostById = async (newData, id) => {
    const {title, content, tags, user_id} = newData
    return Post.findByIdAndUpdate(id)
}

const removePostById = async (id) => {
    return Post.findByIdAndDelete(id)
}

export { createPost, updatePostById, getPosts, getPostById, removePostById }