const mongoose = require('mongoose');

let tagsSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    articles: [{type: mongoose.Schema.Types.ObjectId, ref:'Article'}]
});

tagsSchema.method({
    prepareIsert: function () {
        let Article = mongoose.model('Article');
        for (let article of this.articles) {
            Article.findBy(article).then(article => {
                if (article.tags.indexOf(this.id)=== -1) {
                    article.tags.push(this.id);
                    article.save();
                }
            });
        }
    },

    deleteArticle: function (articleId) {
        this.articles.remove(articleId);
        this.save();
    }
});

tagsSchema.set('versionKey', false);
const Tag = mongoose.model('Tag', tagsSchema);

module.exports = Tag;