const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    img_src: String,
    answer: String
});

module.exports = mongoose.model('postModel', PostSchema);