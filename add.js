import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve form directly from backend
app.get('/', (req, res) => {
  res.send(`
    <h2>Add Two Numbers</h2>
    <form action="/add" method="POST">
      Number 1: <input type="number" name="num1" required><br><br>
      Number 2: <input type="number" name="num2" required><br><br>
      <input type="submit" value="Add Numbers">
    </form>
  `);
});

// Handle form submission
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const sum = Number(num1) + Number(num2);

  // Save result to file
  fs.writeFile('result.txt', `Sum: ${sum}`, (err) => {
    if (err) {
      return res.send("Error saving the result!");
    }
    res.send(`
      <h2>Result</h2>
      Sum of ${num1} and ${num2} is <b>${sum}</b><br><br>
      <p>Result saved to <b>result.txt</b></p>
    `);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
