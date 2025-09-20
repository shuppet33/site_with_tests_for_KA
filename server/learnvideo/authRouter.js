import {UsersDB} from "./models/db.js";
import {Router} from "express";
import bcrypt from "bcryptjs";
import {validationResult} from "express-validator";
import jwt from 'jsonwebtoken';
import {v7 as uuidv7} from 'uuid';

const secretKey = "secretqwerty";

const generateAccessToken = (id, role,) => {
    const payload = {
        id,
        role,
    }
    return jwt.sign(payload, secretKey, {expiresIn: "6h"})
}

export const router = new Router();

router.post('/register', (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({message: "Ошибка регистрации"}, errors)
        }
        const {id, username, password, role} = req.body;

        const candidate = UsersDB.find((item) => item.login === login)

        if (candidate) {
            res.status(400).json(candidate);
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const userId = uuidv7();
        const user = {id: userId, login: username, password: hashedPassword, role: role};

        UsersDB.push(user)
        res.status(201).json(user);

    } catch (e) {
        res.status(400).json({message: "register failed"});
    }
})


router.post('/login', (req, res) => {
    try {
        const {login, password} = req.body;
        const user = UsersDB.find((item) => item.login === login)

        if (!user) {
            return res.status(400).json({message: `user с таким ником (${user}) не найден}`})
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({message: "password incorrect"})
        }

        const token = generateAccessToken(user.id, user.role)
        res.status(200).json({token, role: user.role})

    } catch (e) {
        console.log(e);
        res.status(400).json({message: "login failed"});
    }
})

router.post('/logout', (req, res) => {
    res.status(200).json({message: "Logged out"});
});

router.get('/getusers', async function (req, res) {
    res.json(UsersDB)
})
