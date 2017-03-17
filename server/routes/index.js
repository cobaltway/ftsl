const ressources = require('./ressources'),
    client = require('./client');

module.exports = function(app) {
    ressources(app);
    client(app);
};
