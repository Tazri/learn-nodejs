let showMessage = (req,res)=>{
    console.log(req.query);
    res.send('Render all post');
}

let showDetails = (req,res)=>{
    console.log(req.params);
    let postId = req.params.postId;
    let reviewId = req.params.reviewId;
    res.send(`<h1> post postId : ${postId} <br> post reviewId ${reviewId}</h2>`);
}

let createPost = (req,res)=>{
    console.log(req.params);
    let postId = req.params.postId;
    let reviewId = req.params.reviewId;
    res.send(`<h1> Creating postId : ${postId} <br>Creating reviewId ${reviewId}</h2>`);
}

let updatePost = (req,res)=>{
    console.log(req.params);
    let postId = req.params.postId;
    let reviewId = req.params.reviewId;
    res.send(`<h1>Updating post postId : ${postId} <br>Updating post reviewId ${reviewId}</h2>`);
}

let deletePost = (req,res)=>{
    console.log(req.params);
    let postId = req.params.postId;
    let reviewId = req.params.reviewId;
    res.send(`<h1>Deleting post postId : ${postId} <br>Deleting post reviewId ${reviewId}</h2>`);
}

module.exports = {
    showMessage,
    showDetails,
    createPost,
    updatePost,
    deletePost
}