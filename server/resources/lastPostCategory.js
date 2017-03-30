const keystone = require('keystone'),
    Category = keystone.list('Category'),
    Post = keystone.list('Post');

module.exports = function({name, page, withAbstract}) {
    return new Promise((resolve, reject) => {
        Category.model.findOne({
            slug: name
        })
        .exec((err, category) => {
            if (err) {
                reject(err);
                return;
            }

            if (!category) {
                reject(new Error('No category can be found with the name: "' + name + '".'), 400);
                return;
            }

            Post.model.find().where('category').in([category._id]).sort('-creationDate').populate('authors')
            .skip(((page || 1) - 1) * 10).limit(10)
            .exec((err, posts) => {
                if (err) {
                    reject(err);
                    return;
                }

                const postsToReturn = posts.map((post) => {
                    return keystone.format(post, {
                        abstract: withAbstract ? post.abstract.html : undefined,
                        content: undefined,
                        category: undefined,
                        authors: post.authors.map((a) => {
                            return keystone.format(a, {
                                biography: undefined
                            });
                        })
                    });
                });

                resolve(keystone.format(category, {
                    description: category.description.html,
                    posts: postsToReturn
                }));
            });
        });
    });
};
