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

const getUsers = (filters = {}, page, limit) => {
    return User.find(filters)
                .limit(limit*1)
                .skip((page-1)*limit)
                .exec()
} 

const getUserById = (id) => {
    return User.findById(id)
}

const updateUserById = (id, userData, options = {})=>{
    return User.findByIdAndUpdate(id, userData, {new: true, ...options})
}

const deleteUserById = (id) => {
    return User.findByIdAndDelete(id)
}


export {
    createUser,
    updateUserById,
    deleteUserById,
    getUserById,
    getUsers
}