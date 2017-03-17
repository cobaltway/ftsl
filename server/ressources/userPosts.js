const keystone = require('keystone'),
    User = keystone.list('User'),
    Post = keystone.list('Post');

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

        Post.model.find().where('authors').in([user._id]).exec(function(err, posts) {
            if (err) {
                callback(err, null);
                return;
            }

            const postsToReturn = posts.map((post) => {
                return keystone.format(post, {
                    abstract: post.abstract.html,
                    content: undefined
                });
            });

            callback(null, postsToReturn);
        });
    });
};
