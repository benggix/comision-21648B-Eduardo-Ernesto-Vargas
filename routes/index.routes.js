const {Router} = require('express');
const Post = require('../models/post');

const router = Router();

// Ruta para mostrar todos los posts
router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.render('index', { posts });
});


module.exports = router;