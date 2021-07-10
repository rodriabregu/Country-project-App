const { Country, Activity } = require("../db.js");
const {v4: uuidv4} = require('uuid')

async function getNewActivity(req, res) {
     const { name, difficulty, duration, season, cId } = req.body;

     const validateAct = await Activity.findOne({
       where: {
         name: name,
       }
     });
     if ( !name || !difficulty || !duration || !season || !cId) {
        res.status(404).send("Properties are missing.");
     }
     if ( validateAct ) {
        return res.json('The activity already exists.');
     }
     const id = uuidv4();
     if ( !validateAct ) {
        let newAct = await Activity.create({
           id,
           name,
           difficulty,
           duration,
           season,
        });
        let matchCountry = await Country.findOne({
          where: {
            id: cId,
        },
        });
    let succAct = await newAct.addCountries(matchCountry) 
    
    return res.send(succAct);
};
}

async function getActId(req, res) {
    try {
        const { idAct } = req.params;
        if ( idAct ) {
          const result = await Activity.findOne({
            where: { id: idAct },
            include: Country,
          });
          if (!result) {
            return res.status(404).send("ID Not found into our database");
          }
          await res.json(result);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Server crashed");
      }
}

module.exports = {
    getNewActivity,
    getActId,
};




/*   const { name, difficulty, duration, season, countryId } = req.body;
 try {
   let newActivity = await Activity.create({
     name,
     difficulty,
     duration,
     season,
   }, {
       fields: ['name', 'difficulty', 'duration', 'season']
   }
   );
   if (newActivity) {
     res.json({
       message: "Activity create successfully",
       data: newActivity,
     });
   }
 } catch (err) {
     res.status(500).json({
         message: 'Something goes wrong',
         data: {}
     })
 } */