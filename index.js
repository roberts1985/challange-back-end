import dbConnect from './src/libs/db.js'
import { server } from './src/server.js'
import * as dotenv from 'dotenv'

dotenv.config()

const { PORT } =  process.env

dbConnect()
    .then(()=>{
        server.listen(PORT, ()=>{
            console.log('Server listening on port ',PORT)
        })
    })
    .catch((error)=>{
        console.error('Error: ', error)
    })