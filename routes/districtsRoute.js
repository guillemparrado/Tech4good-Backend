const express = require('express')
const router = express.Router()
const  getAllDistricts  = require ('../api/districts/getAllDistricts.js')

router.route('/')
    .get(getAllDistricts)

  module.exports = router