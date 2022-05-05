const db = require('../models');
const Party = db.partys;

exports.getAll = (req, res) => { 
    Party.findAll({raw:true}).then((partys)=>{
        console.log(partys);
        res.send(partys); 
    }).catch(err=>console.log(err));
    
}
exports.createParty = (req, res) => { 
    console.log(req.body);
    const party = req.body;
    Party.create(party).then((partys)=>{
        res.send(partys)
    }).catch(err=>console.log(err));
}
exports.deleteParty = (req,res) => { 
    const id = +req.params.id
    Party.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
