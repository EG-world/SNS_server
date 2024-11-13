let users = [
    {
        id:'1',
        username:'apple',
        password: '$2b$10$YcdhIPEStW9o7.3oNC0EY.QKsM1hjED02mjHTqyU7t.SKT15E.q2e',
        name:'김사과',
        email:'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliZquTmH17hknpnn2sGfWObG0IdiiNwUaEw&s'
    },
    {
        id:'2',
        username:'banana',
        password: '$2b$10$uAAOnUpcOrfm44FffFFa/.ByJ23bHwCkvXlH1uty.WXEeWoyLnOcm',
        name:'반하나',
        email:'banana@banana.com',
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    },
    {
        id:'3',
        username:'orange',
        password: '$2b$10$YcoAmj2u04ghxXbCkmMp7upOS0IvaaVhc92QJurKjK2.EGIuL8Xdy',
        name:'오렌지',
        email:'orange@orange.com',
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    },
]

export async function createUser(username, password, name) {
    const user = {
        id:'4',
        username,   // username: username 이랑 같은 의미
        password,
        name,
        email: `${username}@${username}.com`,
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    } 
    users = [...users, user]
    return user
}

export async function findByUsername(username) {
    const user = users.find((user) => user.username === username)
    return user
}

export async function findById(id) {
    return users.find((user) => user.id === id)
}

