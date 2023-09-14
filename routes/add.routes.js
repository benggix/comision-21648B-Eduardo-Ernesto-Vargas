const {Router} = require('express');
const Post = require('../models/post');

const router = Router();

// Ruta para mostrar el formulario de agregar post
router.get('/add', (req, res) => {
    res.render('add');
  });
  
// Ruta para procesar el formulario de agregar post
router.post('/add', async (req, res) => {
    const { title, content, imageUrl } = req.body;
    await Post.create({ title, content, imageUrl });
    res.redirect('/');
  });

  module.exports = router;