import { request } from 'express';
import jwt from '../libs/jwt.js'

const isAuth = (request, response, next)=>{
    try {
       
        const authorization = request.headers.authorization || ""
        
        const token = authorization.replace("Bearer ", "") 

        const isValidToken = jwt.verify(token);

        if(!isValidToken) throw new Error("Unauthorized")

        next()

    } catch (error){
        response
        .status(401) 
        .json({
            success: false,
            message: error.message
        })
    }
}

// const isAdmin = async (request, response, next)=>{
//     try {
//         const authorization = request.header.authorization || "" 

//         const token = authorization.replace("Bearer ", "")

//         const tokenPayload = jwt.verify(token);

//         if(!tokenPayload) throw new Error("Invalid authorization")

//         const koderId = tokenPayload.id //Sacar el id

//         const koderFound = await getKoderById(koderId)

//         if(!koderFound) throw new Error("Invalid authorization")

//         const { role = "user"} = koderFound; 

//         if(role === "admin"){
//             next()
//         }
//         else{
//             response
//             .status(401)
//             .json({
//                 success: false,
//                 message: "Unauthorized"
//         })
//         }


//     } catch (error){
//         response
//         .status(401)
//         .json({
//             success: false,
//             message: error.message
//         })
//     }
// }

export { isAuth }