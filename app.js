import express from 'express'
import tweetsRouter from './router/tweets.js' // 나중에 tweets를 sns로 바꾸기
import authRouter from './router/auth.js'
import { config } from './config.js'

const app = express()

// 미들웨어 등록, 시작시 실행
app.use(express.json())

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
    res.sendStatus(404)
})

app.listen(config.host.port)