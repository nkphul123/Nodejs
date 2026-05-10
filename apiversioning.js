//URL versioning
const express = require("express");
const app = express();
app.use(express.json());
// Version 1
app.get("/api/v1/users", (req, res) => {
res.json({
name: "Navneet"
});
});
// Version 2
app.get("/api/v2/users", (req, res) => {
res.json({
fullName: "Navneet Kaur",
email: "navneet@example.com"
});
});
app.listen(3000, () => {
console.log("Server running on port 3000");
});


//Route versioning (Check routes folder, then v1 foloder and v2 folder)
// const express = require("express");
// const app = express();
// const v1Routes = require("./routes/v1/userRoutes");
// const v2Routes = require("./routes/v2/userRoutes");
// app.use("/api/v1", v1Routes);
// app.use("/api/v2", v2Routes);
// app.listen(3000, () => {
// console.log("Server started");
// });