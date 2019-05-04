const express = require('express');
const router = express.Router();
const { create } = require("../controllers/PhotoController");

router.post("/api/images", create);

module.exports = router;