const fs = require('fs'),
    ressources = fs.readdirSync('./ressources'),
    queryFunctions = {};

ressources.forEach((q) => {
    queryFunctions[q] = require('../ressources/' + q);
});

exports = module.exports = function(app) {
    ressources.forEach((q) => {
        app.get('/api/' + q.replace('.js', ''), (req, res) => {
            queryFunctions[q](Object.assign({}, req.query, req.body), (err, data) => {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }

                res.status(200).send(data);
            });
        });
    });
};
