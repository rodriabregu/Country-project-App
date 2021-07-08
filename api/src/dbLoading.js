const axios = require("axios");
const { Country } = require("./db");
const { URL_ALL } = require("./utils/config/constants");

async function loadingDb(_req, res) {
  try {
    {
      const ApiAll = await axios.get(URL_ALL);
      const ModelCountries = ApiAll.data.map( c => {
        return {
          id: c.alpha3Code,
          name: c.name,
          alpha3Code: c.alpha3Code,
          flag: c.flag,
          region: c.region,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      });
      /* console.log(ApiAll); */
       ModelCountries.forEach( async e => {
        await Country.create({
            id: e.alpha3Code,
            name: e.name,
            alpha3Code: e.alpha3Code,
            flag: e.flag,
            region: e.region,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
        });
      }); 
    }
    console.log("Loading DB success;");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server crashed");
  }
}

module.exports = { loadingDb };