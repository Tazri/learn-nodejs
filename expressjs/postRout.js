// imporst router
const router = require('express').Router();
const postControler = require('./postControler');

router.get('/',postControler.showMessage)

router.get('/:postId/:reviewId',postControler.showDetails);

router.post('/:postId/:reviewId',postControler.createPost);

router.put('/:postId/:reviewId',postControler.updatePost);

router.delete('/:postId/:reviewId',postControler.deletePost);


module.exports = router;