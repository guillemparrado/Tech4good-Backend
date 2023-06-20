const {Activities} = require("./Activities");
const {Districts} = require("./Districts");
const {Groups} = require("./Groups");
const {Neighborhoods} = require("./Neighborhoods");
const {Indicators} = require("./Indicators");

Activities.belongsTo(Groups);
Neighborhoods.belongsTo(Districts);
Districts.hasMany(Neighborhoods);
Groups.hasMany(Activities);
Indicators.belongsTo(Activities);
Indicators.belongsTo(Neighborhoods);
