const posts = require("../data/posts");

function index(req, res) {
  const responseData = {
    result: posts,
    message: "Lista dei post di Gabriela",
    success: true,
  };
  res.json(responseData);
}

function show(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((posts) => post.id === postId);

  if (!post) {
    return res.status(404).json({
      message: `Post ${postID} non trovato`,
      success: false,
    });
  }
}

const responseData = {
  result: post,
  message: `Dettaglio del post ${postId}`,
  success: true,
};
res.json(responseData);

module.exports = { index, show };
