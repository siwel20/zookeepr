const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeepers = require('../../lib/zookeepers');

router.use(require('./zookeeperRoutes'));
router.use(animalRoutes);

module.exports = router;