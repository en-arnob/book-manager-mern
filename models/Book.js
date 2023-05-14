const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    name: {
        type: String,
        maxlength: 100,
        required: true,
    },
    author: {
        type: String,
        maxlength: 100,
        required: true,

        
    },
    authorAge: {
        type: Number,
        maxlength: 10,
        required: true,
    },
    totalPage: {
        type: Number,
        maxlength: 100,
        required: true,

    },
    publishDate: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,

    },
    bookslug: {
        type: String,
        required: true,
        unique: true,
    }
})
    


const Book = model("Book", bookSchema, "books")
module.exports = Book;