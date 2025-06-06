import { Router } from "express";
import {
	getBooks,
	addBook,
	deleteBook,
	updateBook,
} from "../controllers/bookController";

const router = Router();

const route = "books";

router.get(`/${route}`, getBooks);
router.post(`/${route}`, addBook);
router.delete(`/${route}/:id`, deleteBook);
router.put(`/${route}/:id`, updateBook);

export default router;
