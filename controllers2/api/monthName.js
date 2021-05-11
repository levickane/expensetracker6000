const router = require('express').Router();
router.get('/', (req, res) => {
    res.render('monthName');
});


module.exports = router;