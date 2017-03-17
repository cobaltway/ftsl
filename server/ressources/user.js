const keystone = require('keystone'),
    User = keystone.list('User');

module.exports = function({name}, callback) {
    User.model.findOne({
        slug: name
    }).exec(function(err, user) {
        if (err) {
            callback(err, null);
            return;
        }

        if (!user) {
            callback(new Error('No user can be found with the name: "' + name + '".'), null);
            return;
        }

        callback(null, keystone.format(user, {
            biography: user.biography.html
        }));
    });
};
