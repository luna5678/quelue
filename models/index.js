require('../config/db.connection');

module.exports = {
    Episode: require('./Episode'),
    Show: require('./Show'),
    User: require('./User')
};