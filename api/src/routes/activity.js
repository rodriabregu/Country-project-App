const { Router } = require('express');
const router = Router();
const { getNewActivity, getActId } = require('../controllers/activity');


router.post('/activity', getNewActivity);
router.get('/activity/:idAct', getActId);


module.exports = router;