const ServerReply = require('../../utils/ServerReply.js')
const showDevError = require('../../utils/showDevError.js')
const NoActivitiesException = require('../../exceptions/NoActivitiesException.js')
const {Activities} = require('../../models/Activities')

const getActivitiesByGroup = async (req, res) => {
    try {
      const groupFilter = req.params
      const runner = new ServerReply(res)
      const activitiesList = await Activities.findOne({where: {groupFilter}}) // falta el modelo y los atributos que se quieren mostrar
      if (!activitiesList) throw new NoActivitiesException('No activities were found.')
        
      runner.sendResponse(200, activitiesList)
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoActivitiesException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getActivitiesByGroup