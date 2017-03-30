const keystone = require('keystone'),
    Post = keystone.list('Post');

module.exports = function({page}) {
    return new Promise((resolve, reject) => {
        Post.model.find().sort('-creationDate').populate('authors').populate('category')
        .skip(((page || 1) - 1) * 10).limit(10)
        .exec((err, posts) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(posts.map((post) => {
                const authorsToReturn = post.authors.map((author) => {
                    return keystone.format(author, {
                        biography: undefined
                    });
                });

                return keystone.format(post, {
                    authors: authorsToReturn,
                    category: keystone.format(post.category, {
                        description: post.category.description.html
                    })
                });
            }));
        });
    });
};
