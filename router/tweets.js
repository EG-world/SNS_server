// 글 관련 파일
import express from 'express'

const router = express.Router()

let tweets = [
    {
        id:'1',
        name:'김사과',
        username:'apple',
        text:'안녕하세요',
        crearedAt: Date.now().toString(),
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    },
    {
        id:'2',
        name:'반하나',
        username:'banana',
        text:'하잉',
        crearedAt: Date.now().toString(),
        url: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20230824085230_f752af859c2906f139a79e04b9534df4.png'
    },
    {
        id:'3',
        name:'오렌지',
        username:'orange',
        text:'첫 SNS!',
        crearedAt: Date.now().toString(),
        url: 'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    }
]

// 해당 아이디에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', (req, res, next) => {   // query 는 ? 이후에 모든 데이터들
    const username = req.query.username
    const tweet = username ? tweets.filter((tweet) => tweet.username == username) : tweets
    res.status(200).json(tweet)
})

// 글 번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', (req, res, next) => {   // query 는 ? 이후에 모든 데이터들
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet) {
        res.status(200).json(tweet)
    }else {
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})

// 트윗 하기
// POST
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력
router.post('/', (req, res, next) => {
    const { username, name, text } = req.body
    const tweet = {
        id:'4',
        username: username,
        name: name,
        text: text,
        crearedAt: Date.now().toString()
    }
    tweets = [tweet, ...tweets]
    res.status(201).json(tweets)
})

// 트윗 수정하기
// PUT
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const text = req.body.text
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text =  text
        res.status(201).json(tweet)
    }else {
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})

// 트윗 삭제하기
// DELETE
// http://127.0.0.1:8080/tweets/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet) {
        tweets = tweets.filter(item => item !== tweet)
        res.status(204).json(tweets)
    }else {
        res.status(404).json({ massage: `${id}가 없습니다`})
    }
})




// 외부에서 가져다 쓸 수 있게
export default router