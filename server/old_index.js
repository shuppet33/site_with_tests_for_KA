import express from 'express';
import {router} from './authRouter.js';

const PORT = 8080;
const app = express()
const SECRET_KEY = "superpupersecret";

app.use(express.json())
app.use("/auth", router);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log("ошибка епта ->  ", e.message);
    }
}

start()