import * as authRepository from '../data/auth.js'

// signup
export async function signup(req, res, next) {
    const { username, password, name } = req.body
    const users = await authRepository.createUser(username, password, name)
    if(users) {
        res.status(201).json(users)
    }
}

// login
export async function login(req, res, next) {
    const { username, password } = req.body
    const check = await authRepository.login(username)
    if(check) {
        res.status(201).send('로그인 성공')
    }else {
        res.status(404).send(`${username}님 아이디 또는 패스워드를 확인하세요`)
    }
}