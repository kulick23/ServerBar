const db = require('../models');
const Place = db.places;

exports.getAll = (req, res) => { 
    Place.findAll({raw:true}).then((places)=>{
        console.log(places);
        res.send(places); 
    }).catch(err=>console.log(err));
    
}
exports.createPlaces = (req, res) => {
    console.log(req.body);
    const place = req.body;
    Place.create(place).then((places)=>{
        res.send(places)
    }).catch(err=>console.log(err));
}
exports.deletePlaces = (req,res) => {
    const id = +req.params.id
    Place.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
