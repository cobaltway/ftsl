const keystone = require('keystone'),
    Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
    autokey: {
        path: 'slug',
        from: 'title',
        unique: true
    }
});

Post.add({
    title: {
        type: Types.Text,
        required: true,
        initial: true
    },
    authors: {
        type: Types.Relationship,
        ref: 'User',
        many: true,
        index: true
    },
    category: {
        type: Types.Relationship,
        ref: 'Category',
        index: true
    },
    abstract: {
        type: Types.Markdown,
        height: 100
    },
    content: {
        type: Types.Markdown,
        height: 400
    },
    creationDate: {
        type: Types.Date,
        readOnly: true,
        index: true
    },
    modificationDate: {
        type: Types.Date,
        readOnly: true
    }
});

Post.schema.pre('save', function(next) {
    if (!this.creationDate) {
        this.creationDate = new Date();
    }
    else if (this.isModified('content')) {
        this.modificationDate = new Date();
    }
    next();
});

Post.defaultColumns = 'title, authors, category, creationDate';
Post.relationship({
    path: 'category',
    ref: 'Category',
    refPath: 'pinPosts'
});
Post.register();
