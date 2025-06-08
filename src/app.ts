import express, { NextFunction, Request, Response } from "express";
const cors = require("cors");
import bookRoutes from "./routes/bookRoutes";
import { handleError } from "./middleware/handleError";
import { ApiError } from "./models/error";
import { ZodError } from "zod";

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

// Book routes
app.use("/api/books", bookRoutes);

// Error handler
app.use(
	(
		error: ApiError | ZodError | Error,
		request: Request,
		response: Response,
		next: NextFunction
	) => {
		handleError(error, request, response, next);
	}
);
export default app;
