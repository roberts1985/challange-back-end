import express from 'express'
import { createPost, getPosts, getPostById, updatePostById, removePostById } from '../usecases/post.usecase.js'
// import { isAuth } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post('/',/* isAuth */  async (request, response) => {

    try {

        const newPost = request.body
        const postCreated = await createPost(newPost);

        response.json({
            success: true,
            data: {
                message: "Post created successfully.",
                user: postCreated
            }
        })


    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at creating Post.",
                extraInfo: error.message
            })
    }
})

router.get("/", /* isAuth */  async (request, response)=>{
    try{
        const allPosts = await getPosts()
        response.json({
            success: true,
            data: {
                data: allPosts
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: error.message
            })
    }
})

router.get("/:id", /* isAuth */  async(request, response)=>{
    try {
        const {id} = request.params
        const postById = await getPostById(id)
        response.json({
            success: true,
            message: console.log(postById),
            data: {
                data: postById
            }
        })
    } catch (error) {
        response
            .status(404)
            .json({
                success: false,
                message: error.message
            })
    }
})

router.patch("/:id", /* isAuth */  async (request, response)=>{
    try {
        const {id} = request.params
        const newData = request.body
        const modifiedPost = await updatePostById(id, newData)
        response.json({
            success: true,
            data: {
                message: "Post updated successfully.",
                data: modifiedPost
            }
        })
    } catch (error) {
        response
            .status(404)
            .json({
                success: false,
                message: error.message,
            })
        
    }
})

router.delete("/:id", /* isAuth */  async (request, response)=>{
    try {
        const {id} = request.params
        const removedPost = await removePostById(id)
        response.json({
            success: true,
            data: {
                data: removedPost
            }
        })
    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: error.message
            })
    }
})

export default router