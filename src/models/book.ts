import { z } from "zod";

type IsoDateString = string; // Improvement: add validation to ensure datestring is of the correct format

export const BookSchema = z.object({
	id: z.number(),
	title: z.string(),
	author: z.string(),
	dateOfPublish: z.string(),
	coverImage: z.string(),
});

export const BookWithoutIdSchema = BookSchema.omit({ id: true });

export type Book = z.infer<typeof BookSchema>;
export type BookWithoutId = z.infer<typeof BookWithoutIdSchema>;
