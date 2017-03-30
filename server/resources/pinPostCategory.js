const keystone = require('keystone'),
    Category = keystone.list('Category');

module.exports = function({name, withAbstract}) {
    return new Promise((resolve, reject) => {
        Category.model.findOne({
            slug: name
        })
        .populate('pinPosts')
        .exec((err, category) => {
            if (err) {
                reject(err);
                return;
            }

            if (!category) {
                reject(new Error('No category can be found with the name: "' + name + '".'), 400);
                return;
            }

            const postsToReturn = category.pinPosts.map((post) => {
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
                pinPosts: postsToReturn
            }));
        });
    });
};
