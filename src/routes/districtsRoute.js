const express = require('express')
const router = express.Router()
const getAllDistricts  = require ('../api/districts/getAllDistricts.js')
const getDistrictByName = require('../api/districts/getDistrictByName.js')

router.route('/')
    .get(getAllDistricts)
    .get(getDistrictByName)

  module.exports = router