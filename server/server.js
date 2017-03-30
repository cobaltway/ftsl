const keystone = require('keystone'),
    fs = require('fs'),
    path = require('path');

keystone.init({
    name: 'FTSL',
    static: ['public'],
    'auto update': true,
    session: true,
    'session store': 'mongo',
    auth: true,
    'user model': 'User',
    'cookie secret': process.env.FTSL_COOKIE_SECRET,
    mongo: process.env.FTSL_MONGO,
    port: 80,
    host: '127.0.0.1'
});

fs.readdirSync(path.join(__dirname, './models')).forEach((m) => {
    require('./models/' + m);
});

fs.readdirSync(path.join(__dirname, './libs/utils')).forEach((u) => {
    keystone[u.replace('.js', '')] = require('./libs/utils/' + u);
});

keystone.set('routes', require('./routes'));

keystone.start();
