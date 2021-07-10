const { Country, Activity } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

const getNewActivity = async (req, res) => {
  const { name, difficulty, duration, season, cId } = req.body;
  const validateAct = await Activity.findOne({ //Comprueba en la db que matchee con el name de body;
    where: {
      name: name,
    },
  });
  if (!name || !difficulty || !duration || !season || !cId) { //Si no recibe alguno de los parametros del body;
    res.status(404).send("Properties are missing.");
  };
  if (validateAct) {
    return res.json("The activity already exists."); //Si matcheo correctamente con uno existente;
  };
  const id = uuidv4();
  if (!validateAct) {
    let newAct = await Activity.create({ //Crea en la db (model: Activity), 
      id, //El id genera automaticamente a raíz del uuidv4();
      name,
      difficulty,
      duration,
      season,
    });
    let matchCountry = await Country.findOne({ //Devuelve el pais que coincida del body con la db (model: Country);
      where: {
        id: cId,
      },
    });
    let succAct = await newAct.addCountries(matchCountry);

    return res.send(succAct);
  };
};

const getActId = async (req, res) => {
  try {
    const { idAct } = req.params;
    if ( idAct ) {
      const result = await Activity.findOne({ //Matchea con una actividad creada y a parte, devuelve su data Country;
        where: { id: idAct },
        include: Country,
      });
      if (!result) {
        return res.status(404).send("ID not found into our database.");
      }
      await res.json(result); //En caso de tener resultado correcto, lo devuelve;
    };
  } catch (err) {
    console.log(err);
    res.status(500).send("Server crashed");
  };
};

module.exports = {
  getNewActivity,
  getActId,
};