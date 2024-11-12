let users = [
    {
        id:'1',
        username:'apple',
        password: '1111',
        name:'김사과',
        email:'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliZquTmH17hknpnn2sGfWObG0IdiiNwUaEw&s'
    },
    {
        id:'2',
        username:'banana',
        password: '2222',
        name:'반하나',
        email:'banana@banana.com',
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    },
    {
        id:'3',
        username:'orange',
        password: '3333',
        name:'오렌지',
        email:'orange@orange.com',
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    },
]

export async function createUser(username, password, name) {
    const user = {
        id:'4',
        username: username,
        password: password,
        name: name,
        email: `${username}@${username}.com`,
        url: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/bz201705_celeb_astro_003.jpg'
    } 
    users = [...users, user]
    return user
}

export async function login(username) {
    const user = users.find((user) => user.username === username)
    return user
}