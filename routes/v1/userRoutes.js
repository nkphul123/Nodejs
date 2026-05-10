const express = require("express");
const router = express.Router();
router.get("/users", (req, res) => {
res.json({
name: "Navneet"
});
});
module.exports = router;