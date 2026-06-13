import express from 'express'
import { client } from "db/client"

const app = express()
app.use(express.json());

app.get('/', async (req, res) => {

    const user = await client.user.findFirst()

    res.status(200).json({
        data: user
    })
})


app.post('/', async (req, res) => {

    const username: string = req.body.username 
    const password: string = req.body.password 

    const user = await client.user.create({
        data: {
            username: username,
            password: password 
        }
    })

    res.status(200).json({
        status: "success",
        data: user
    })
})


app.listen(3000, () => {
    console.log("Server is started on port 3000")
})