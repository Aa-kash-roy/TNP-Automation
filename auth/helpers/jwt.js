const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// get password vars from .env file
// dotenv.config();

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
            res.redirect('users/login')
        }
        req.user = user
        res.status(200);
    })
    // next();
}

function generateAccessToken(username) {
    username = username.split('@')[0]
    username = username.toUpperCase();

    var user = {name: username, isAdmin: false}
    if(username.includes("admin")){
        user.isAdmin = true
    }
    const token = jwt.sign(user, TOKEN_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = {
    authenticateToken,
    generateAccessToken
}



