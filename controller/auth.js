import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'qwer1234#$%'

async function makeToken(id) {
    const token = jwt.sign(
        {
            id: id,
            isAdmin: false,
        }, secret, { expiresIn: '1h' }
    )
    return token
}

// signup
export async function signup(req, res, next) {
    const { username, password, name } = req.body
    const hashed = bcrypt.hashSync(password, 10)
    const users = await authRepository.createUser(username, hashed, name)
    if(users) {
        res.status(201).json(users)
    }
}

// login
export async function login(req, res, next) {
    const { username, password } = req.body
    const user = await authRepository.findByUsername(username)
    if(!user) {
        res.status(401).send(`${username} 아이디를 찾을 수 없음`)
    }else {
        if(bcrypt.compareSync(password, user.password)) {
            res.status(201).header('Token', makeToken(username)).json(`${username} 로그인 완료`)
        }else {
            res.status(404).json({ message: `${username}님 비밀번호를 확인해주세요`})
        }
    }
}

// verify
export async function verify(req, res, next) {
    const token = req.header['Token']   // header를 까봤을 때 Token이라는 항목을확인
    if(token) {
        res.status(200).json(token)
    }
}