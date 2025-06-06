const PORT = 4000;

import app from "./app";

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/status", (_request: any, response: any) => {
	const status = {
		Status: "I'm up!",
	};

	response.send(status);
});
