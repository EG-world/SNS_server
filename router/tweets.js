// 글 관련 파일
import express from 'express'

const router = express.Router()

// 해당 아이디에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets?username=:username


// 글 번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets/:id


// 트윗 하기
// POST
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력


// 트윗 수정하기
// PUT
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력


// 트윗 삭제하기
// DELETE
// http://127.0.0.1:8080/tweets/:id




// 외부에서 가져다 쓸 수 있게
export default router