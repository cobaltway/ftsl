const keystone = require('keystone'),
    Types = keystone.Field.Types,
    Category = new keystone.List('Category', {
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
    }
});

Category.defaultColumns = 'name';
Category.register();