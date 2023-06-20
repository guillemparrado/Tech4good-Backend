const ServerReply = require('../../utils/ServerReply.js')
const showDevError = require('../../utils/showDevError.js')
const NoNeighborhoodsException = require('../../exceptions/NoNeighborhoodsException.js')

const getNeighborhoodsByDistrict = async (req, res) => {
    try {
      const filter = req.body
      const runner = new ServerReply(res)
      const district = await Districts.findOne({where: {districtFilter}}) // falta el modelo
      if (!district) throw new NoNeighborhoodsException('No neighborhoods were found.')
        
      runner.sendResponse(200, district) // Return the games as JSON
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoNeighborhoodsException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getNeighborhoodsByDistrict