const express = require('express')
const router = express.Router()
const getGroups = require('../controllers/groups/getGroups')
const getActivitiesByGroup = require('../controllers/groups/getActivitiesByGroup')

router.get('/', getGroups)

router.get('/:id', getActivitiesByGroup)

module.exports = router