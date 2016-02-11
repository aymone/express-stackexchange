var sdk     = require("stackexchange"),
    options = {version: 2.2},
    api     = new sdk(options);

module.exports = {
    filter: {
        pagesize: 5,
        tagged: 'node.js',
        sort: 'activity',
        order: 'asc'
    },
    setFilters: function (filter) {
        for (var prop in filter)
            if (this.filter[prop]) this.filter[prop] = filter[prop];
    },
    getAll: function (callback) {
        return api.questions.questions(this.filter, callback);
    }
};
