const { Country, Activity } = require("../db.js");

const getAllCountrys = async (_req, res) => {
  try {
    let countriesDB = await Country.findAll({
      include: [Activity]
    }); //Deposito todo lo guardadod de la db;
    res.json(countriesDB);
  } catch (err) {
    console.log("Could not load the countries from the database.", err);
  };
};

const getFilterCountrys = async (req, res) => {
  const { name } = req.query;
  if ( name ) {
    try {
      const result = await Country.findAll({ //Comprueba si hay match con lo recibido del query;
        where: { name: name },
        include: [Activity]
      });
      if ( !result ) {
        return res.status(404).send("Country search does not match."); //En caso de que no haya coincidencia;
      };
      return await res.json(result); //En caso de sí haber;
    } catch (err) {
      console.log(err);
      res.status(500).send("Server crashed.");
    };
  };
  try {
    let countriesDB = await Country.findAll(); //Deposita todo los datos de la db;
    let countriesFilter = countriesDB.slice(0, 10); //Muestra los primeros diez;
    res.json(countriesFilter);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server crashed.");
  };
};

const getId = async (req, res) => {
  try {
    const { idPais } = req.params;
    if ( idPais ) {
      const result = await Country.findOne({ //Guarda la coincidencia que haya mediante params y si tiene actividad, también la devuelve;
        where: { id: idPais.toUpperCase() },
        include: [Activity]
      });
      if (!result) {
        return res.status(404).send("ID Not found into our database");
      }
      await res.json(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server crashed");
  };
};

module.exports = {
  getAllCountrys,
  getFilterCountrys,
  getId,
};