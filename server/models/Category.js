const keystone = require('keystone'),
    Types = keystone.Field.Types;

const Category = new keystone.List('Category', {
    autokey: {
        path: 'slug',
        from: 'name',
        unique: true
    }
});

Category.add({
    name: {
        type: Types.Text,
        required: true
    },
    description: {
        type: Types.Markdown
    },
    pinPosts: {
        type: Types.Relationship,
        ref: 'Post',
        many: true
    }
});

Category.defaultColumns = 'name';
Category.register();
