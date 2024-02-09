import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { createOrUpdate, deleteUserById, getUserById, readAllUsers } from './db.js'

import group3DDBtable from './routes.js'

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

app.get("/", async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        console.log({ data })

        if (success) {
            return res.render("./home.ejs", { data: data[data.length - 1] })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})

app.use('/api', group3DDBtable)

const PORT = 8000
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Port listening on https://${HOST}:${PORT}`);
});

