const db = require('../models');
const Coctail = db.coctails;

exports.getAll = (req, res) => { 
    Coctail.findAll({raw:true}).then((coctails)=>{
        console.log(coctails);
        res.send(coctails); 
    }).catch(err=>console.log(err));
    
}
exports.createCoctail = (req, res) => { 
    console.log(req.body);
    const coctail = req.body;
    Coctail.create(coctail).then((coctails)=>{
        res.send(coctails)
    }).catch(err=>console.log(err));
}
exports.deleteCoctail = (req,res) => { 
    const id = +req.params.id
    Coctail.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
