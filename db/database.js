import mysql from 'mysql2'
import { config } from '../config.js'


// mysql을 빠르게 연결해주기 위한 코드
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})  

export const db = pool.promise()