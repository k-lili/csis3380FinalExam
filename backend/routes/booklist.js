const router = require('express').Router();
let Book = require('../models/booklist.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log('just single id:' + req.params.id);
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post(async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;

  // create a new Book object
  const newBook = await new Book({
    title,
    author,
    description
  });

  console.log(newBook);

  // save the new Book object
  newBook
    .save()
    .then(() => res.json('New book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});


router.route('/:id').post(async (req, res) => { //remember to add book
  console.log(req.params.id);

  await  Book.findById(req.params.id)
    .then((bookToEdit) => {
        bookToEdit.title = req.body.title;
        bookToEdit.author = req.body.author;
        bookToEdit.description = req.body.description;

        bookToEdit
            .save()
            .then(() => res.json('Book updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(async (req, res) => {
  console.log('delete logged');
    
  await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
