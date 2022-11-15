import express from 'express'
import { AppDataSource } from "./data-source";
import subjectRoute from './routes/subjectRoute'
import roomRoute from './routes/roomRoute'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(roomRoute)

    app.use(subjectRoute)
    

    return app.listen(process.env.PORT,() => {
        console.log(`🚀Server is running on http://localhost:${process.env.PORT}`)
        
    }) 
})