const express = require('express')
const router = express.Router()
const { Posts } = require('./models');


router.post('/post', async(req,res)=>{
    try {
      const id = req.body?.id;
      const nombre = req.body?.nombre;
      const descripcion = req.body?.descripcion;
  
      if (!nombre || !id || !descripcion) {
        return res.status(400).json({ message: 'Bad request, id or nombre or descripcion not found' });
      }
      const save = await Posts.create({
        id,
        nombre,
        descripcion,
        createdAt:"",
        updatedAt:"",
      })

      return res.status(201).json({ post: save });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

router.get('/posts', async (req, res) => {
    try {
      const posts = await Posts.findAll()
      return res.json({ posts });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

 
router.delete('/post/:id', async(req,res)=>{
    const {id}=req.params
    try {
        const del = await Posts.destroy({
            where: { id:id}
        })
        res.status(200).json({message:'deleted: '+del})
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})


module.exports = router