const posts = require("../data/posts");

function index(req, res) {
  const responseData = {
    result: posts,
    message: "Lista dei post di Gabriela",
    success: true,
  };
  res.json(responseData);
}

module.exports = { index };
