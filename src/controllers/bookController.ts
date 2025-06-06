import { Request, Response, NextFunction } from "express";
import { Book, books } from "../models/book";

/**
 * Get books
 */
export const getBooks = (
	request: Request,
	response: Response,
	next: NextFunction
) => {};

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
