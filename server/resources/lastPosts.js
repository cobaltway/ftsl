const keystone = require('keystone'),
    Category = keystone.list('Category'),
    Post = keystone.list('Post');

const fetchCategory = function(name) {
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

            resolve(category);
        });
    });
};

const fetchLastPosts = function({page, withAbstract, categoryId}) {
    return new Promise((resolve, reject) => {
        let query = Post.model.find();
        if (categoryId) {
            query = query.where('category').in([categoryId]);
        }
        else {
            query = query.populate('category');
        }

        query.sort('-creationDate').populate('authors')
        .skip(((page || 1) - 1) * 10).limit(10)
        .exec((err, posts) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(posts.map((post) => {
                return keystone.format(post, {
                    abstract: withAbstract ? post.abstract.html : undefined,
                    category: categoryId ? undefined : post.category,
                    content: undefined,
                    authors: post.authors.map((a) => {
                        return keystone.format(a, {
                            biography: undefined
                        });
                    })
                });
            }));
        });
    });
};

module.exports = function({categoryName, page, withAbstract}) {
    return new Promise((resolve, reject) => {
        if (categoryName) {
            fetchCategory(categoryName)
            .then((category) => {
                fetchLastPosts({page, withAbstract, categoryId: category._id})
                .then((posts) => {
                    resolve(keystone.format(category, {
                        description: category.description.html,
                        posts
                    }));
                }, reject);
            }, reject);
        }
        else {
            fetchLastPosts({page, withAbstract})
            .then((posts) => {
                resolve({posts});
            }, reject);
        }
    });
};
