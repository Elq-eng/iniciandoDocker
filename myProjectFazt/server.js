import express from 'express'
import { createPool } from 'mysql2/promise';

const app = express()
const client = createPool({
    host: "localhost",
    port: 3308, 
    user: "root",
    password: "123456Je",
})


const res = await client.query('SELECT  1 + 1');
console.log("🚀 ~ file: server.js ~ line 14 ~ res", res)
app.listen(3000)
