import express from "express"
import cors from "cors"
//import { usuarios, tweets } from "dados.js"

const server = express()
server.use(cors())
server.use(express.json())

const usuarios = []
const tweets = []

server.post("/sign-up", (req, res) => {
  usuarios.push(req.body)
  res.send("OK")
})

server.post("/tweets", (req, res) => {
  tweets.push(req.body)
  res.send("OK")
})

server.get("/tweets", (req, res) => {
  const ultimosTweets = []

  tweets.map((tweet, index) => {
    const _tweet = {
      username: tweet.username,
      avatar: usuarios.find(usuario => usuario.username === tweet.username).avatar,
      tweet: tweet.tweet,
    }

    index < 10 ? ultimosTweets.push(_tweet) : ""
  })

  res.send(ultimosTweets)
})

server.listen(5000)