const { Router } = require('express');
const router = Router();
const { getNewActivity, getActId } = require('../controllers/activity');


router.post('/activity', getNewActivity);
router.post('/activity/:idAct', getActId);


module.exports = router;