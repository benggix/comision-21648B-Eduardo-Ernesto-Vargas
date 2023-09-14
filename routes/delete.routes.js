const {Router} = require('express');
const Post = require('../models/post');

const router = Router();

// Ruta para eliminar un post
router.post('/delete/:id', async (req, res) => {
    await Post.destroy({ where: { id: req.params.id } });
    res.redirect('/');
  });
  
module.exports = router;
  