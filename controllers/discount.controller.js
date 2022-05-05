const db = require('../models');
const Discount = db.discounts;

exports.getAll = (req, res) => { 
    Discount.findAll({raw:true}).then((discounts)=>{
        console.log(discounts);
        res.send(discounts); 
    }).catch(err=>console.log(err));
    
}
exports.createDiscount = (req, res) => { 
    console.log(req.body);
    const discount = req.body;
    Discount.create(discount).then((discounts)=>{
        res.send(discounts)
    }).catch(err=>console.log(err));
}
exports.deleteDiscount = (req,res) => { 
    const id = +req.params.id
    Discount.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
