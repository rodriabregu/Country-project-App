const { Router } = require('express');
const router = Router();
const { getNewActivity, getAllActivity, getActId } = require('../controllers/activity');


router.post('/activity', getNewActivity);
router.get('/activity/', getAllActivity);
router.get('/activity/:id', getActId);


module.exports = router;