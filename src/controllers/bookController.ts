import { Request, Response, NextFunction } from "express";
import { Book, BookWithoutId } from "../models/book";
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
		response.status(201).json();
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

		const bookIndex = bookList.findIndex((book) => book.id === bookId);

		if (bookIndex === -1) {
			throw new Error("This book is not in the library");
		}

		bookList.splice(bookIndex, 1);

		response.status(204).end();
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

		const newData: BookWithoutId = request.body;
		bookList[bookIndex] = { ...bookList[bookIndex], ...newData };
		response.status(200).json();
	} catch (error) {
		next(error);
	}
};
