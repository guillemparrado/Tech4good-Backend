class NoActivitiesException extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = NoActivitiesException