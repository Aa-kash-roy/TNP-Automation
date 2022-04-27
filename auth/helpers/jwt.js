const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// get password vars from .env file
dotenv.config();

const TOKEN_SECRET = "abfiudsfnefiuhewof9jeiwkfniewufgiwjhgfiuwg"
async function authenticateToken(req, res, next) {
    // const token = await req.headers['authorization']
    const authHeader = req.headers.cookie
    
    const token = await authHeader && authHeader.split('=')[1]
    console.log(token)
    
    if (token == null){
        console.log("Token is none");
        res.status(401)
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err){ 
            console.log("token didn't matched");
            res.status(403)
        }
        req.user = user
        res.status(200);
    })
    next();
}

function generateAccessToken(username) {
    username = username.split('@')[0]
    username = username.toUpperCase();
    const user = {name: username}
    const token = jwt.sign(user, TOKEN_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = {
    authenticateToken,
    generateAccessToken
}



