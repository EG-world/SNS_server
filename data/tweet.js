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

// 모든 트윗을 리턴
export async function getAll() {
    return tweets
}

// 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username)
}

// 글 번호에 대한 트윗을 리턴
export async function getById(id) {
    return tweets.find((tweet) => tweet.id === id)
}

// 받은 새로운 데이터를 tweets에 추가시켜 리턴
export async function create(username, name, text) {
    const tweet = {
        id:'4',
        username: username,
        name: name,
        text: text,
        crearedAt: Date.now().toString()
    } 
    tweets = [...tweets, tweet]
    return tweet
}

// 트윗 수정
export async function update(id, text){
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text = text
    }
    return tweet
}

export async function deleteTweet(id) {
    tweets = tweets.filter(item => item !== tweet)
    return tweets
}
