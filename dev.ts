import app from "./src/main";

app.listen(3000, (server) => {
	console.log(`Server running at ${server.url}`);
	console.log(`Swagger UI available at ${server.url}swagger`);
});
