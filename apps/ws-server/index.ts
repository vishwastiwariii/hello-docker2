import { WebSocketServer } from "ws"
import { client } from "db/client"

const server = new WebSocketServer({ port: 3001})

server.on('connection', async (ws)=> {
    ws.send("Connection Established")

    console.log("client connected")

    const res = await client.user.create({
        data: {
            username: Math.random().toString(), 
            password: Math.random().toString()
        }
    })

    console.log(res)

    ws.on('close', () => {
        console.log("Client disconnected")
    })
})

