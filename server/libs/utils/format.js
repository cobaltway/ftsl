exports = module.exports = function(ressource, overwrites) {
    return Object.assign(ressource.toObject(), {
        password: undefined,
        email: undefined,
        __v: undefined,
        _id: undefined,
        canAccessKeystone: undefined
    }, overwrites);
};