import jwt from 'jsonwebtoken'

const {JWT_SECRET} = process.env

const sign = (payload) => {
    return jwt.sign(payload,JWT_SECRET,{
        expiresIn: "2d"
    })
}

const verify = (token)=> {
    return jwt.verify(token,JWT_SECRET)
}

export default {
    ...jwt,
    sign,
    verify
}