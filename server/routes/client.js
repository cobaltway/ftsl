const fs = require('fs'),
    renderer = require('vue-server-renderer');

module.exports = function(app) {
    app.get('*', (req, res) => {
        renderer.renderToString(require('client/bundle')(), (err, html) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            fs.readFile('client/index.html', (err, index) => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }

                res.send(index.replace('<div id="app"></div>', html));
            });
        });
    });
};
