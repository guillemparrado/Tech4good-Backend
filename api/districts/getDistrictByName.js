const ServerReply = require('../../helpers/ServerReply.js')
const showDevError = require('../../helpers/showDevError.js')
const NoDistrictsException = require('../../helpers/exceptions/NoGamesPlayedException.js')

const getDistrictByName = async (req, res) => {
    try {
      const districtFilter = req.body 
      const runner = new ServerReply(res)
      const district = await Districts.findOne({where: {districtFilter}}) // falta el modelo
      if (!district) throw new NoDistrictsException('No district was found.')
        
      runner.sendResponse(200, district) // Return the games as JSON
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoDistrictsException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getDistrictByName