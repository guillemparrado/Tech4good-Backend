const ServerReply = require('../../utils/ServerReply.js')
const showDevError = require('../../utils/showDevError.js')
const NoGroupsException = require('../../exceptions/NoGroupsException.js')

const getGroups = async (req, res) => {
    try {
      const runner = new ServerReply(res)
      const groupList = await Groups.findAll() // falta el modelo
      if (!groupList) throw new NoGroupsException('No groups were found.')

      runner.sendResponse(200, groupList)
  
    } catch (error) {
      const runner = new ServerReply(res)
      showDevError(error)
          return  error.constructor.name === 'NoGroupsException' ?
                  runner.sendError(400, error.message) :
                  runner.sendError(500, 'Server error')
    }
  }

  module.exports = getGroups