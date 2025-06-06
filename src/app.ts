import express from "express";
import bookRoutes from "./routes/bookRoutes";
import { handleError } from "./middleware/handleError";

const app = express();

app.use(express.json());

// Book routes
app.use("/api/books", bookRoutes);

// Error handling
app.use(handleError);

export default app;
