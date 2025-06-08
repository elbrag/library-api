import { z } from "zod";

export const BookSchema = z.object({
	id: z.number(),
	title: z.string(),
	author: z.string(),
	dateOfPublish: z.string(), // Improvement: validate date string as timestamp
	coverImage: z.string(),
});

export const BookWithoutIdSchema = BookSchema.omit({ id: true });

export type Book = z.infer<typeof BookSchema>;
export type BookWithoutId = z.infer<typeof BookWithoutIdSchema>;
