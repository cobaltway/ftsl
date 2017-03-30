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

            require('../client/index.js')(req.originalUrl).then((app) => {
                const stream = renderer.renderToStream(app);

                stream.on('error', (err) => {
                    stream.removeAllListeners('data')
                    .removeAllListeners('error')
                    .removeAllListeners('end');
                    res.end(String(err));
                });

                stream.on('data', (chunk) => {
                    res.write(chunk);
                });

                stream.on('end', () => {
                    stream.removeAllListeners('data')
                    .removeAllListeners('error')
                    .removeAllListeners('end');
                    res.end(lastPart);
                });
            }, (err) => {
                console.error(err);
                res.status(500).send(err);
            });
        });
    });
};
