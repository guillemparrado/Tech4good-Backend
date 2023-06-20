const ServerReply = require('../../helpers/ServerReply.js')
const showDevError = require('../../helpers/showDevError.js')
const NoDistrictsException = require('../../helpers/exceptions/NoGamesPlayedException.js')

const getAllDistricts = async (req, res) => {
    try {
      const runner = new ServerReply(res)
      const districtList = await Districts.findAll() // falta el modelo
      if (!districtList) throw new NoDistrictsException('No districts found.')
        
      runner.sendResponse(200, districtList) // Return the games as JSON
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoDistrictsException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getAllDistricts