const ServerReply = require('../../utils/ServerReply.js')
const showDevError = require('../../utils/showDevError.js')
const NoNeighborhoodsException = require('../../exceptions/NoNeighborhoodsException.js')

const getNeighborhoodsByDistrict = async (req, res) => {
    try {
      const districtFilter = req.params
      const runner = new ServerReply(res)
      const neighborhoodList = await Districts.findOne({where: {districtFilter}}) // falta el modelo y los atributos que se quieren mostrar
      if (!neighborhoodList) throw new NoNeighborhoodsException('No neighborhoods were found.')
        
      runner.sendResponse(200, neighborhoodList)
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoNeighborhoodsException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getNeighborhoodsByDistrict