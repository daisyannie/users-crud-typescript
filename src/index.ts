import 'reflect-metadata'
import express from "express"
import router from "./interfaces/http/users.router"

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
    console.log('Server is running!')
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)