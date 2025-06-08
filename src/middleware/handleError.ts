import { NextFunction, Request, Response } from "express";
import { ApiError } from "../models/error";
import { ZodError } from "zod";

export const handleError = (
	error: ApiError | ZodError | Error,
	_request: Request,
	response: Response,
	_next: NextFunction
) => {
	const message = error.message ?? "Internal server error";
	console.error(error);
	// Zod errors
	if (error instanceof ZodError) {
		const validationErrors = error.errors.map((err) => ({
			path: err.path.join("."),
			message: err.message,
		}));

		response.status(400).json({
			message: "Validation error",
			errors: validationErrors,
		});
	} // ApiErrors
	else if (error instanceof ApiError) {
		const code = error.statusCode ?? 500;
		response.status(code).json({ message });
	} // Other
	else {
		response.status(500).json({ message });
	}
};
