const router = require("express").Router();
const {addBookController, getBookController} = require('../controllers/booksController')

router.post('/addBook', addBookController)
router.get('/getBook', getBookController)


module.exports = router;