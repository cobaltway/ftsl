const keystone = require('keystone'),
    User = keystone.list('User');

module.exports = function({name}) {
    return new Promise((resolve, reject) => {
        User.model.findOne({
            slug: name
        })
        .exec((err, user) => {
            if (err) {
                reject(err);
                return;
            }

            if (!user) {
                reject(new Error('No user can be found with the name: "' + name + '".'), 400);
                return;
            }

            resolve(keystone.format(user, {
                biography: user.biography.html
            }));
        });
    });
};
