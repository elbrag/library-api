const express = require("express");
const app = express();
app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/status", (request, response) => {
	const status = {
		Status: "I'm up",
	};

	response.send(status);
});
