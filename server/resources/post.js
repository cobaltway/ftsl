const keystone = require('keystone'),
    Post = keystone.list('Post');

module.exports = function({title}) {
    return new Promise((resolve, reject) => {
        Post.model.findOne({
            slug: title
        }).populate('authors').populate('category')
        .exec((err, post) => {
            if (err) {
                reject(err);
                return;
            }

            if (!post) {
                reject(new Error('No Post can be found with the title: "' + title + '".'), 400);
                return;
            }

            const authorsToReturn = post.authors.map((author) => {
                return keystone.format(author, {
                    biography: undefined
                });
            });

            resolve(keystone.format(post, {
                authors: authorsToReturn,
                category: keystone.format(post.category, {
                    description: post.category.description.html
                })
            }));
        });
    });
};
