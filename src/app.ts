import express from "express";
const cors = require("cors");
import bookRoutes from "./routes/bookRoutes";
import { handleError } from "./middleware/handleError";

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

// Error handling
app.use(handleError);

export default app;
