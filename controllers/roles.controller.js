const db = require('../models');
const Role = db.roles;

exports.getAll = (req, res) => { 
    Role.findAll({raw:true}).then((roles)=>{
        console.log(roles);
        res.send(roles); 
    }).catch(err=>console.log(err));
    
}
exports.createRole = (req, res) => { 
    console.log(req.body);
    const role = req.body;
    Role.create(role).then((roles)=>{
        res.send(roles)
    }).catch(err=>console.log(err));
}
exports.deleteRole = (req,res) => { 
    const id = +req.params.id
    Role.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
