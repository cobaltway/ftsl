const resources = require('./resources'),
    client = require('./client');

module.exports = function(app) {
    resources(app);
    client(app);
};
