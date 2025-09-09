import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';


const app = express()
app.use(bodyParser.json());
const SECRET_KEY = "superpupersecret";

const users = [
    {id: 1 , username: "ruslan", password: "12345", role: "admin"},
    {id: 2 , username: "alena", password: "12345", role: "user"},
]

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(function(item) {
        if (item.password === password && item.username === username) {
            return item
        }
    });
    const token = jwt.sign({id: user.id , role: user.role} , SECRET_KEY,{expiresIn: '1h'})
    res.json({ token });

})

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/api/profile', authMiddleware, (req, res) => {
    res.json({ message: `Привет, ${req.user.role}!`, user: req.user });
});


app.listen(3000, () => console.log("Сервер запущен на http://localhost:3000"));


