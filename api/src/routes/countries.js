const { Router } = require('express');
const router = Router();
const { getAllCountrys, getFilterCountrys, getId } = require('../controllers/countries')


router.get('', getAllCountrys);
router.get('/countries', getFilterCountrys);
router.get('/countries/:idPais', getId);


module.exports = router;