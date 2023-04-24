import { User } from '../models/user.model.js'
import bcrypt from '../libs/bcrypt.js'

// Use Cases = Handlers

const createUser = async (userData) => {
    const {email,password} = userData

    const userFound = await User.findOne({email})
    //console.log(userFound)
    if(userFound) throw new Error("The user already exist")
    
    //Encriptar el password
    const encryptedPassword = await bcrypt.hash(password) 

    //Retornamos unaa promesa de tipo createKoder
    return  User.create({...userData, password: encryptedPassword})
}


export {
    createUser
}