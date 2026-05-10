const express = require("express");
const router = express.Router();
router.get("/users", (req, res) => {
res.json({
fullName: "Navneet Kaur",
email: "navneet@example.com"
});
});
module.exports = router;