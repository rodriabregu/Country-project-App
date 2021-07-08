const { Router } = require('express');
const router = Router();
const { getAllCountrys, getFilterCountrys, getId } = require('../controllers/countries')
/* const { } = require('../controllers/countries'); */
/* const { Country } = require('../db.js');
const { Acitivity } = require('../db.js'); */


router.get('', getAllCountrys);
router.get('/countries', getFilterCountrys);
router.get('/countries/:idPais', getId);

/* router.get('/countries?name="..."', (req, res) => {

}) */

module.exports = router;