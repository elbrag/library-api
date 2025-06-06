import { Request, Response, NextFunction } from "express";
import { Book, books } from "../models/book";
import { books as booksData } from "../db/books";

/**
 * Get books
 */
export const getBooks = (
	_request: Request,
	response: Response,
	next: NextFunction
) => {
	try {
		response.json(booksData);
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
) => {};

/**
 * Delete book
 */
export const deleteBook = (
	request: Request,
	response: Response,
	next: NextFunction
) => {};

/**
 * Update book
 */
export const updateBook = (
	request: Request,
	response: Response,
	next: NextFunction
) => {};
