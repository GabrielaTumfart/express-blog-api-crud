let posts = require("../data/posts");

// Index - GET /posts/ - Restituisce la lista di tutti i post in formato JSON
function index(req, res) {
  const responseData = {
    result: posts,
    message: "Lista dei post di Gabriela",
    success: true,
  };
  res.json(responseData);
}

// Show - GET /posts/:id - Restituisce un singolo post in formato JSON
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
// Se il post non esiste risponde con errore 404
const responseData = {
  result: post,
  message: `Dettaglio del post ${postId}`,
  success: true,
};
res.json(responseData);

// Store - POST /posts/ - Creazione di un nuovo post
function store(req, res) {
  const responseData = {
    message: "Creazione di un post",
    success: true,
  };
  res.json(responseData);
}

// Update - PUT /posts/:id - Modifica intera di un post
function update(req, res) {
  const postID = parseInt(req.params.id);
  const responseData = {
    message: `Modifica intera del post ${postId}`,
    success: true,
  };
  res.json(responseData);
}

// Modify - PATH /posts/:id - Modifica parziale di un post
function modify(req, res) {
  const postId = parseInt(req.params.id);
  const responseData = {
    message: `Modifica parziale del post ${postId}`,
    success: true,
  };
  res.json(responseData);
}

module.exports = { index, show, store, update, modify };
