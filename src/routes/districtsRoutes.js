const express = require('express')
const router = express.Router()
const getAllDistricts  = require('../controllers/districts/getAllDistricts.js')
const getNeighborhoodsByDistrict = require('../controllers/districts/getNeighborhoodsByDistrict.js')

router.get('/', getAllDistricts)
    
router.get('/:id', getNeighborhoodsByDistrict)

module.exports = router