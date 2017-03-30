const fs = require('fs'),
    path = require('path');

const resources = fs.readdirSync(path.join(__dirname, '../resources')),
    queryFunctions = {};
resources.forEach((q) => {
    queryFunctions[q] = require('../resources/' + q);
});

exports = module.exports = function(app) {
    resources.forEach((q) => {
        app.get('/api/' + q.replace('.js', ''), (req, res) => {
            queryFunctions[q](Object.assign({}, req.query, req.body)).then((data, successCode = 200) => {
                res.status(successCode).send(data);
            }, (err, errCode = 500) => {
                res.status(errCode).send(err.message);
            });
        });
    });
};
