const axios = require('axios').default;
const { Country } = require('../db.js');

async function getAllCountrys (_req, res) {
    try {
     let countriesDB = await Country.findAll();
     res.json(countriesDB);
    } catch (err) {
        console.log("Problema al cargar los paises", err);
    }
};
async function getFilterCountrys (req, res) {
     const { name } = req.query;
       if (name) {
        try {
            const result = await Country.findOne({
              where: { name: name }
            });
            if (!result) {
              return res.status(404).send("No coincinde");
            }
            await res.json(result);
        } catch (error) {
          console.log(error);
          res.status(500).send("Server crashed");
        }
       }
     try {
     let countriesDB = await Country.findAll();
     let countriesFilter = countriesDB.slice(0, 10);
     res.json(countriesFilter);
    } catch (err) {
        console.log("Problema al cargar los paises", err);
    }
};

async function getId (req, res) {
  try {
    const { idPais } = req.params;
    if (idPais) {
      const result = await Country.findOne({
        where: { id: idPais.toUpperCase() }
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
};

module.exports = {
    getAllCountrys,
    getFilterCountrys,
    getId,
};