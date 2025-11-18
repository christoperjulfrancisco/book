const Book = require('../models/Book');
const asyncHandler = require('express-async-handler'); 

const borrowBook = asyncHandler(async (req, res, next) => {
    const { borrower } = req.body;
    const book = await Book.findById(req.params.id);

    if (!book) {
        return res.status(404).json({ success: false, message: 'Book not found' });
    }

    if (!book.available) {
        return res.status(400).json({ success: false, message: 'Book is already borrowed' });
    }

    if (!borrower) {
        return res.status(400).json({ success: false, message: 'Borrower name is required' });
    }

    book.available = false;
    book.borrower = borrower;
    book.borrowedAt = Date.now();
    await book.save();

    res.status(200).json({
        success: true,
        message: 'Book borrowed successfully',
        data: book
    });
});