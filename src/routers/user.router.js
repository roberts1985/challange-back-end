import express from 'express'
import { createUser } from '../usecases/user.usecase.js'
//import { isAuth, isAdmin } from '../middlewares/auth.middleware.js'
/* import { method } from '../middlewares/terminal.middelware.js' */

const router = express.Router()

//router.use(isAuth)
/*
router.get('/', isAuth, method, async (request, response) => {

    try {
        const { name, nat, bio, user_since } = request.query

        let filters = {}

        if (name)
            filters = { ...filters, name }

        if (generation)
            filters = { ...filters, generation }

        if (gender)
            filters = { ...filters, gender }

        if (name)
            filters = { ...filters, name }

        if (lastname)
            filters = { ...filters, lastname }

        if (isGraduated)
            filters = { ...filters, isGraduated }

        const kodersFound = await getKoders(filters)

        response.json({
            success: true,
            data: {
                koders: kodersFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get All Koders"
            })
    }

})
/*
router.get('/:id', isAuth, method, async (request, response) => {
    try {

        const { id } = request.params

        const koderFound = await getKoderById(id);

        response.json({
            success: true,
            data: {
                koder: koderFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get Koder by Id"
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


router.post('/', /* method, */ async (request, response) => {

    try {

        const newUser = request.body
        const userCreated = await createUser(newUser);

        response.json({
            success: true,
            data: {
                message: "lo lograste, papito",
                user: userCreated
            }
        })


    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at create Koder",
                extraInfo: error.message
            })
    }
})

/*

router.patch("/:id", isAuth, method, async (request, response) => {
    try {

        const { id } = request.params
        const newKoderData = request.body
        const koderUpdated = await updateKoderById(id, newKoderData)

        response.json({
            success: true,
            data: {
                koder: koderUpdated
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at update Koder",
                extraInfo: error.message
            })
    }
})

router.delete("/:id", isAuth, isAdmin, method, async (request, response) => {
    try {
        const { id } = request.params

        const koderDeleted = await deleteKoderById(id)

        response.json({
            success: true,
            data: {
                koder: koderDeleted
            }
        })
    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at delete Koder",
                extraInfo: error.message
            })
    }
})*/

export default router