import {UsersDB} from "./models/db.js";
import {Router} from "express";
import bcrypt from "bcryptjs";
import {check,validationResult} from "express-validator";
import jwt from 'jsonwebtoken';
import { v7 as uuidv7 } from 'uuid';

const secretkey = "secretqwerty";


const generateAcsessToken  = (id,role,) => {
    const payload = {
        id,
        role,
    }
    return jwt.sign(payload, secretkey, {expiresIn: "6h"})
}

export const router = new Router();

router.post('/register', (req, res) => {
    // check("username", "Имя пользователя не может быть пустым").notEmpty()
    // check("password","Пароль не может быть пустым").isLength({ min: 6, max: 50 });
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({message: "Ошибка регистрации"},errors)
        }
        const {id,username, password,role } = req.body;

        const candidat = UsersDB.find((item) => item.username === username)

        if (candidat) {
            res.status(400).json(candidat);
        }

        const hashedpassword = bcrypt.hashSync(password, 10);
        const userId = uuidv7();
        const user = {id: userId, username: username, password: hashedpassword, role: role};

        UsersDB.push(user)
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({message:"register failed"});
    }
})



router.post('/login', (req, res) => {
    try{
        const {username, password} = req.body;
        const user = UsersDB.find((item) => item.username === username)
        if(!user) {
            return res.status(400).json({message: `user с таким ником (${user}) не найден}`})
        }
        const validPassword = bcrypt.compareSync(password,user.password);
        console.log('validp ', validPassword);

        if (!validPassword) {
            return res.status(400).json({message: "password incorrect"})
        }

        const token = generateAcsessToken(user.id,user.role)
        res.status(200).json({token})
    }catch(e){
        console.log(e);
        res.status(400).json({message:"login failed"});
    }
})

router.post('/logout', (req, res) => {
    res.clearCookie("Authorization");
    res.status(200).json({ message: "Logged out" });
});


router.get('/getusers', async function (req, res) {
    res.json(UsersDB)
})
