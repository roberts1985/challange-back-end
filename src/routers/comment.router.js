import express from 'express'
import { getComments, updateCommentById, deleteCommentById, getCommentById } from '../usecases/comment.usecase.js'
import { isAuth } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/comments', async(request,response)=> {
    try{
        const { content, comment_date, user_id } = request.query

        let filters = {}

        if(content)
            filters = {...filters,content}
        
        if(comment_date)
            filters = {...filters,comment_date}
        
        if(user_id)
            filters = {...filters,user_id}
        
        
        const commentsFound = await getComments(filters)

        response.json({
            success: true,
            data: {
                users: commentsFound
            }
        })

    }catch(error){
        response
            .status(400)
            .json({
                success: false,
                message: "Error at getting comments"
            })
    }
})


router.patch("comments/:id", isAuth, async (request, response) => {
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

router.delete("comments/:id", isAuth, async (request, response) => {
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