import express from 'express'
import userRouter from './routers/user.router.js'
import postRouter from './routers/post.router.js'
import authRouter from './routers/auth.router.js'
import commentRouter from './routers/comment.router.js'

const server = express()

//Middlewares
server.use(express.json())

//Routers
server.use('/users',userRouter)
server.use('/auth',authRouter)
server.use('/posts',postRouter)
server.use('/comments', commentRouter)


export { server }