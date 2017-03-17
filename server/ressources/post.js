const keystone = require('keystone'),
    Post = keystone.list('Post');

module.exports = function({title}, callback) {
    Post.model.findOne({
        slug: title
    }).populate('authors').populate('category').exec(function(err, post) {
        if (err) {
            callback(err, null);
            return;
        }

        if (!post) {
            callback(new Error('No Post can be found with the title: "' + title + '".'), null);
            return;
        }

        const authorsToReturn = post.authors.map((author) => {
            return keystone.format(author, {
                biography: undefined
            });
        });

        callback(null, keystone.format(post, {
            authors: authorsToReturn,
            category: keystone.format(post.category, {
                description: post.category.description.html
            })
        }));
    });
};
