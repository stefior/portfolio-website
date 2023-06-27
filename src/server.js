const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com; style-src 'self' https://fonts.googleapis.com; script-src-elem 'self' https://www.googletagmanager.com data:; connect-src 'self' https://firebase.googleapis.com https://fonts.googleapis.com https://fonts.gstatic.com https://www.googletagmanager.com data:"
  );
  return next();
});

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
