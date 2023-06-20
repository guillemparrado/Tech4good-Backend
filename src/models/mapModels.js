const {Activities} = require("./Activities");
const {Districts} = require("./Districts");
const {Groups} = require("./Groups");
const {Neighborhoods} = require("./Neighborhoods");

Activities.belongsTo(Groups);
Neighborhoods.belongsTo(Districts);
Districts.hasMany(Neighborhoods);
Groups.hasMany(Activities);
