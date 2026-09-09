const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
  //Write your code here
<<<<<<< HEAD
  return res.json(books);
=======
  return res.status(300).json({ message: "Yet to be implemented" });
>>>>>>> cf524ff (Add Axios async book retrieval helpers)
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  //Write your code here
  return res.json(books);
});

<<<<<<< HEAD
public_users.get('/isbn/:isbn',function (req, res) {
  console.log("ISBN ROUTE HIT:", req.params.isbn);
  let isbn = req.params.isbn;
  return res.json(isbn);
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.json(books);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.json(books);
});
=======
// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  console.log("ISBN ROUTE HIT:", req.params.isbn);
  let isbn = req.params.isbn;
  return res.json(books[isbn]);
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  let author = req.params.author;

  // books mein matching author wali books find karo

  // books mein matching author wali books find karo
  let matchingBooks = Object.values(books).filter(book => book.author === author);

  return res.json(matchingBooks);
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  let title = req.params.title;
>>>>>>> cf524ff (Add Axios async book retrieval helpers)

  let matchingBooks = Object.values(books).filter(book => book.title === title);

  return res.json(matchingBooks);
});
//  Get book review
<<<<<<< HEAD
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.json(books);
});
=======
public_users.get('/review/:isbn', function (req, res) {
  let isbn = req.params.isbn;
>>>>>>> cf524ff (Add Axios async book retrieval helpers)

  return res.json(books[isbn].reviews);
});
module.exports.general = public_users;
