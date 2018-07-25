const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    link: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    }
    // author: {
    //     type: String,
    //     required: true,
    // },
    // date: {
    //     type: Date,
    //     required: true
    // }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

