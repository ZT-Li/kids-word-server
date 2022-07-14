const express = require("express");
const router = express.Router();
const Posts = require('../models/postModel');

//get the post
router.get('/', async (req, res) => {
    try {
        const AllPost = await Posts.find();
        res.json(AllPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//sent the post
router.post('/', async (req, res) => {
    const post = new Posts({
        img_src: req.body.img_src,
        answer: req.body.answer
    });
    try {
        const SavePost = await post.save();
        res.json(SavePost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//update the post
router.patch('/:id', async (req, res) => {
    try {
        const updatePost = await Posts.updateOne(
            { _id: req.params.id },
            { $set: { answer: req.body.answer } }
        );
        res.json(updatePost);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

//delete the post
router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Posts.deleteOne({ _id: req.params.id });
        res.json(deletePost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;