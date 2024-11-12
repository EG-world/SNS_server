// 회원 관련 파일
import express from 'express'
import * as authController from '../controller/auth.js'

const router = express.Router()




// 회원가입
router.post('/signup', authController.signup)

// 로그인
router.post('/login', authController.login)

// 로그인 유지


// 외부에서 가져다 쓸 수 있게
export default router