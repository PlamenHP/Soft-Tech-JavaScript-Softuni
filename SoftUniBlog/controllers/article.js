const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    }
}