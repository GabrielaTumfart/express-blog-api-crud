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

// Destroy - DELETE /posts/:id - Eliminazione di un post
function destroy(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  // BONUS - Se il post non esiste risponde con errore 404
  if (!post) {
    return res.status(404).json({
      message: `Post ${postId} non trovato`,
      success: false,
    });
  }

  // Rimuoviamo il post dalla lista con filter
  posts = posts.filter((post) => post.id !== postId);

  // Stampiamo la lista aggiornata nel terminale
  console.log("Lista aggiornata:", posts);

  // Rispondiamo con status 204 e nessun contenuto
  res.status(204).send();
}
module.exports = { index, show, store, update, modify, destroy };
