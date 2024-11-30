const http=require("http")
const express=require("express")
const app=express()
const path =require("path")
const {Server} =require("socket.io")
const server=http.createServer(app)

//make frame socket.io

app.use(express.static("./public"))

const io=new Server(server)
io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
      io.emit("message",message)
      //go to everywhere --------->emitting
    })
    

})


app.get("/",(req,res)=>{
    res.sendFile("/public/index.html")
})

server.listen(4000,()=>{
    console.log("server is ready")
}) 




