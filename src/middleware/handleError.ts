import { Request, Response } from "express";
import { ApiError } from "../models/error";

export const handleError = (
	error: ApiError,
	_request: Request,
	response: Response
) => {
	console.error(error);
	const code = error.statusCode ?? 500;
	const message = error.message ?? "Internal server error";

	response.status(code).json({ message });
};
