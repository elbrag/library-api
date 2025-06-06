import { Request, Response, NextFunction } from "express";
import { ApiError } from "../models/error";

export const handleError = (
	error: ApiError,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	console.error(error);
	const code = error.statusCode ?? 500;
	const message = error.message ?? "Internal server error";

	response.status(code).json({ message });
};
