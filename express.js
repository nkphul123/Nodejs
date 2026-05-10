import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Form Submission</title>
    </head>
    <body>
      <h1>Simple Form</h1>
      <form action="/submit" method="POST">
        Name: <input type="text" name="username" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `);
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  console.log(req.body);

    res.send(`
        <h1>Form submitted</h1>
        Name: ${username}
        Email: ${email}
        `)

});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
