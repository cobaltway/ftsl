const keystone = require('keystone'),
    Types = keystone.Field.Types,
    User = new keystone.List('User', {
        autokey: {
            path: 'slug',
            from: 'name',
            unique: true
        }
    });

User.add({
    name: {
        type: Types.Text,
        required: true,
        initial: true
    },
    email: {
        type: Types.Email,
        required: true,
        initial: true
    },
    password: {
        type: Types.Password,
        required: true,
        initial: true
    },
    biography: {
        type: Types.Markdown
    },
    canAccessKeystone: {
        type: Boolean
    }
});

User.defaultColumns = 'name, email, canAccessKeystone';
User.register();
