const routes = require('express').Router();
const mongoose = require('mongoose');
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post("/posts", multer(multerConfig).single('file'), async (req, res) => {
    const {originalname: name, size, filename: key} = req.file;
    const post = await Post.create({
        name,
        size,
        key,
        url: ''
    });
    console.log(req.file);
    return res.json(post);
});

mongoose.connect('mongodb+srv://adminfreelas:HcAHyOcwNJBIZJ7Q@cluster0-xxgja.mongodb.net/uploads?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })

module.exports = routes;