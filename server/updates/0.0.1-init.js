const keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {
    new User.model({
        name: 'Cobalt',
        email: 'toutcobalt@gmail.com',
        password: process.env.FTSL_ADMIN_PASSWORD,
        canAccessKeystone: true
    }).save(done);
};
