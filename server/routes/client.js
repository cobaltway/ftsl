const fs = require('fs'),
    path = require('path'),
    renderer = require('vue-server-renderer').createRenderer();

module.exports = function(app) {
    app.get('*', (req, res) => {
        fs.readFile(path.join(__dirname, '../../client/index.html'), (err, page) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            const [firstPart, lastPart] = String(page).split('<div id="app"></div>');
            res.write(firstPart);

            const stream = renderer.renderToStream(require('../../client/index.js')(req.originalUrl));

            stream.on('error', (err) => {
                console.error(err);
                res.status(500).send(err);
            });

            stream.on('data', (chunk) => {
                res.write(chunk);
            });

            stream.on('end', () => {
                res.end(lastPart);
            });
        });
    });
};
