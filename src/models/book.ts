type IsoDateString = string; // Improvement: add validation to ensure datestring is of the correct format

export interface Book {
	id: number;
	title: string;
	author: string;
	dateOfPublish: IsoDateString;
	coverImage: string;
}

export type BookWithoutId = Omit<Book, "id">;
