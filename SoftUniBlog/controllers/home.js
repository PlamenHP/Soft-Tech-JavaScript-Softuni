const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = {
    index: (req, res) => {
        Article.find({}).linit(6).populate('author').then(articles => {
            res.render('home/index', {articles: articles});
        })
    }
};


module.exports = {
  index: (req, res) => {
      res.render('home/index');
  }
};

