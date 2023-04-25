import jwt from "../libs/jwt";

const postAuth = (request,response,next) =>{
    try{
        const authorization = request.headers.authorization || ""
        const token = authorization.replace("Bearer","")
        const valueToken = jwt.verify(token)
        if(!valueToken) throw new Error ("Unauthorized")
        next()
    }
    catch(error){
        response
        .status(401)
        .json({
            sucess:false,
            message:"Error creating a post"
        })
    }
}
export {postAuth}