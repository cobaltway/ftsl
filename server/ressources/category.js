const keystone = require('keystone'),
    Category = keystone.list('Category'),
    Post = keystone.list('Post');

module.exports = function({name, withAbstract}, callback) {
    Category.model.findOne({
        slug: name
    }).exec(function(err, category) {
        if (err) {
            callback(err, null);
            return;
        }

        if (!category) {
            callback(new Error('No category can be found with the name: "' + name + '".'), null);
            return;
        }

        Post.model.find().where('category').in([category._id]).populate('authors').exec(function(err, posts) {
            if (err) {
                callback(err, null);
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

            callback(null, keystone.format(category, {
                description: category.description.html,
                posts: postsToReturn
            }));
        });
    });
};
