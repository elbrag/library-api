export interface Book {
	id: number;
	title: string;
	author: string;
	dateOfPublish: string;
	coverImage: string;
}

export let books: Book[] = [];
