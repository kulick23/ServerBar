const db = require('../models');
const User = db.users;

exports.getOne = (req, res) => { //SELECT * FROM users;
    console.log("login");
    const login = req.params.Login
    User.findOne({
        where: {
            Login: login
        }
    }).then((user)=>{
        console.log(res.json(user));
        res.send(res.json(user)); 
    }).catch(err=>console.log(err));
    
}