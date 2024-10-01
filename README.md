## How to trigger the bug

1. `pnpm i`
2. `pnpm dev`
3. Open `http://localhost:3000/swagger`, make sure that this is a page load
4. Do a test request via the UI
5. Server errors
6. Close the server and start it again but dont close the Swagger page
7. Without a page load, do another test request
8. Observe that there is no error
