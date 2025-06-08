import { Request, Response, NextFunction } from "express";
import { Book, BookWithoutIdSchema } from "../models/book";
import { books as bookList } from "../db/books";
import { ApiError } from "../models/error";

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
		if (!bookList || !Array.isArray(bookList)) {
			throw new ApiError("Book list is not available", 500);
		}

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
		const bookData = BookWithoutIdSchema.parse(request.body);
		const book: Book = {
			...bookData,
			id: bookList.length > 0 ? bookList[bookList.length - 1].id + 1 : 1, // Improvement: This is a bad fallback
		};
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

		if (isNaN(bookId)) {
			throw new ApiError("Book ID is invalid (not a number)", 400);
		}

		const bookIndex = bookList.findIndex((book) => book.id === bookId);

		if (bookIndex === -1) {
			throw new ApiError("This book is not in the library", 404);
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

		if (isNaN(bookId)) {
			throw new ApiError("Book ID is invalid (not a number)", 400);
		}

		const bookIndex = bookList.findIndex((book) => book.id === bookId);

		if (bookIndex === -1) {
			throw new ApiError("This book is not in the library", 404);
		}

		const newData = BookWithoutIdSchema.parse(request.body);

		bookList[bookIndex] = { ...bookList[bookIndex], ...newData };

		response.status(200).json();
	} catch (error) {
		next(error);
	}
};
