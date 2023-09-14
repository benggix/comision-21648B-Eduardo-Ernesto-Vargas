const {Router} = require('express');
const Post = require('../models/post');

const router = Router();


// Ruta para mostrar el formulario de editar post
router.get('/edit/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.render('edit', { post });
  });
  
// Ruta para actualizar un post
router.post('/edit/:id', async (req, res) => {
    const { title, content, imageUrl } = req.body;
    await Post.update({ title, content, imageUrl }, { where: { id: req.params.id } });
    res.redirect('/');
  });
  
  module.exports = router;