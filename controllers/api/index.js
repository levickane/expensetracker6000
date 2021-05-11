const router = require('express').Router();
const userRoutes = require('./userRoutes');
const monthName = require('./monthName');

router.use('/users', monthName);
router.use('/users', userRoutes);
module.exports = router;