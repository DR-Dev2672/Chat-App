const express=require("express")
const app=express()


const path =require("path")
const http=require("http")
const server=http.createServer(app)

app.use(express.static("./public"))

//make frame socket.io

const {Server} =require("socket.io")


const io=new Server(server)

io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
      io.emit("message",message)
      //go to everywhere --------->emitting
    })
    

})

//use to send this file at frontend
app.get("/",(req,res)=>{
    res.sendFile("/public/index.html")
})

server.listen(4000,()=>{
    console.log("server is ready")
}) 




