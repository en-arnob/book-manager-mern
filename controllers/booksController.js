const Book = require('../models/Book')

exports.addBookController = async (req, res) => {
    
    const {
        name,
        author,
        authorAge,
        totalPage,
        publishDate,
        genre,
        bookslug,
      } = req.body;
    //   console.log(totalPage)
    try {
        const checkBook = await Book.findOne({ bookslug });
        if (checkBook) {
            return res
            .status(400)
            .json({ errors: [{ msg: "Book is already registered" }] });
         }
         try {
            const book = await Book.create({
                name,
                author,
                authorAge,
                totalPage,
                publishDate,
                genre,
                bookslug,
            })
            return res.status(200).json({
                msg: "Book added successfully",
              });
         } catch (error) {
            return res.status(500).json({ errors: error });
    
         }
        
       
    } catch (error) {
        return res.status(500).json({ errors: error });
    }

}

exports.getBookController = async (req, res) => {
    // const {
    //     name,
    //     author,
    //     authorAge,
    //     genre,
    //   } = req.body;

    try {
        let books = await Book.find()
        //   .sort([["publishDate", -1]]);
        return res.status(200).json({ msg: "Success", books });
      } catch (error) {
        res.json(error);
      }
}
