import express from 'express'
import { createUser, updateUserById, deleteUserById, getUserById, getUsers } from '../usecases/user.usecase.js'
import { isAuth } from '../middlewares/auth.middleware.js'
import { postAuth } from '../middlewares/auth-post.middleware.js'
//import { method } from '../middlewares/terminal.middelware.js'

const router = express.Router()

router.get('/', async(request,response)=> {
    try{
        const { name, email, user_since, nat, page = 1, limit = 10 } = request.query

        let filters = {}

        if(name)
            filters = {...filters,name}
        
        if(email)
            filters = {...filters,email}
        
        if(user_since)
            filters = {...filters,user_since}
        
        if(nat)
            filters = {...filters,nat}
        
        const usersFound = await getUsers(filters, page, limit)

        response.json({
            success: true,
            data: {
                users: usersFound
            }
        })

    }catch(error){
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get All Users"
            })
    }
})

router.get('/:id', isAuth, async (request,response)=> {
    try {
        const { id } = request.params

        const userFound = await getUserById(id)

        response.json({
            success: true,
            data: {
                user: userFound
            }
        })

    }catch(error) {
        response
            .status(400)
            .json({
                success: false,
                message: 'Error at get User by Id'
            })
    }
})


/***
 * Crear otro middleware para validar el role
 * y verificar si de tipo admin
 * 
 * Si es admin, dejalo pasar
 * 
 * Si no, rechazalo por medio de un response.json
 * 
 * asignarlo al endpoint de delete
 */


router.post('/', async (request, response) => {

    try {

        const newUser = request.body
        let userCreated = await createUser(newUser);

        response.json({
            success: true,
            data: {
                message: "User created successfully.",
                user: userCreated,
            }
        })


    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at creating User.",
                extraInfo: error.message,
            })
    }
})

router.patch("/:id", isAuth, async (request, response) => {
    try {
        const { id } = request.params
        const newUserData = request.body
        const userUpdated = await updateUserById(id, newUserData)

        response.json({
            success: true,
            data: {
                user: userUpdated
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at update User",
                extraInfo: error.message
            })
    }
})

router.delete("/:id", isAuth, async (request, response) => {
    try {
        const { id } = request.params

        const userDeleted = await deleteUserById(id)

        response.json({
            success: true,
            data: {
                user: userDeleted
            }
        })
    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at delete User",
                extraInfo: error.message
            })
    }
})

export default router