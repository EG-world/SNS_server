let tweets = [
    {
        id:'1',
        userId: '1',
        text:'안녕하세요',
        crearedAt: Date.now().toString(),
    },
    {
        id:'2',
        userId: '2',
        text:'하잉',
        crearedAt: Date.now().toString(),
    },
    {
        id:'3',
        userId: '1',
        text:'첫 SNS!',
        crearedAt: Date.now().toString(),
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
    tweets = tweets.filter((tweet) => tweet.id !== id)
    return tweets
}
