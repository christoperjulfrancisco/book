// models/Book.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'], // Input Validation
        trim: true,
        maxlength: 100
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    available: {
        type: Boolean,
        default: true
    },
    borrower: { // Added for the borrow functionality
        type: String,
        default: null
    },
    borrowedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);