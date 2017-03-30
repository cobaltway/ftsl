const keystone = require('keystone'),
    User = keystone.list('User'),
    Post = keystone.list('Post');

module.exports = function({name, page}) {
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

            Post.model.find().where('authors').in([user._id]).sort('-creationDate')
            .skip(((page || 1) - 1) * 10).limit(10)
            .exec((err, posts) => {
                if (err) {
                    reject(err);
                    return;
                }

                const postsToReturn = posts.map((post) => {
                    return keystone.format(post, {
                        abstract: post.abstract.html,
                        content: undefined
                    });
                });

                resolve(postsToReturn);
            });
        });
    });
};
