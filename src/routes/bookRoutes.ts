import { Router } from "express";
import {
	getBooks,
	addBook,
	deleteBook,
	updateBook,
} from "../controllers/bookController";

const router = Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

export default router;
