const ServerReply = require('../../utils/ServerReply.js')
const showDevError = require('../../utils/showDevError.js')
const NoDistrictsException = require('../../exceptions/NoDistrictsException.js')
const {Districts} = require('../../models/Districts')

const getAllDistricts = async (req, res) => {
    try {
      const runner = new ServerReply(res)
      const districtList = await Districts.findAll() // falta el modelo
      if (!districtList) throw new NoDistrictsException('No districts found.')

      runner.sendResponse(200, districtList)
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoDistrictsException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getAllDistricts