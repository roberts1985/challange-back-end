import express from 'express'
import { getComments, createComment, updateCommentById, deleteCommentById } from '../usecases/comment.usecase.js'
import { isAuth } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.get('/', async(request,response)=> {
    try{

        const commentsFound = await getComments()
        response.json({
            success: true,
            data: {
                comments: commentsFound
            }
        })

    }catch(error){
        response
            .status(400)
            .json({
                success: false,
                message: error.message
            })
    }
})

router.post('/',  isAuth,  async (request, response) => {

    try {
        const newComment = request.body
        const commentCreated = await createComment(newComment);

        response.json({
            success: true,
            data: {
                message: "Comment created successfully.",
                user: commentCreated
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at creating Comment.",
                extraInfo: error.message
            })
    }
})

router.patch("/:id", isAuth, async (request, response) => {
    try {
        const { id } = request.params
        const newCommentData = request.body
        const commentUpdated = await updateCommentById(id, newCommentData)

        response.json({
            success: true,
            data: {
                user: commentUpdated
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at updating Comment",
                extraInfo: error.message
            })
    }
})

router.delete("/:id", isAuth, async (request, response) => {
    try {
        const { id } = request.params

        const commentDeleted = await deleteCommentById(id)

        response.json({
            success: true,
            data: {
                user: commentDeleted
            }
        })
    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at deleting Comment",
                extraInfo: error.message
            })
    }
})

export default router