import { Request, Response, NextFunction } from "express";
import { Book, books } from "../models/book";
import { books as bookList } from "../db/books";

// TODO:
// Get rid of all inferred anys
// Type request bodies?
// More explanations
// More error handling

/**
 * Get books
 */
export const getBooks = (
	_request: Request,
	response: Response,
	next: NextFunction
) => {
	try {
		response.json(bookList);
	} catch (error) {
		next(error);
	}
};

/**
 * Add book
 */
export const addBook = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	try {
		const book: Book = request.body;
		book.id = bookList[bookList.length - 1].id + 1;
		bookList.push(book);
		response.status(201).json(bookList);
	} catch (error) {
		next(error);
	}
};

/**
 * Delete book
 */
export const deleteBook = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	try {
		const bookId = parseInt(request.params.id);
		if (!bookId) throw new Error("This book is not in the library");
		const newBookList = bookList.filter((book) => book.id !== bookId);
		response.status(200).json(newBookList);
	} catch (error) {
		next(error);
	}
};

/**
 * Update book
 */
export const updateBook = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	try {
		const bookId = parseInt(request.params.id);
		const bookIndex = bookList.findIndex((book) => book.id === bookId);
		if (!bookIndex) throw new Error("This book is not in the library");

		const newData = request.body;
		bookList[bookIndex] = { ...bookList[bookIndex], ...newData };
		response.status(200).json(bookList);
	} catch (error) {
		next(error);
	}
};
