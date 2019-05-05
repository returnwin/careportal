const express = require('express');
const router = express.Router();
const { list, show, create } = require("../controllers/ItemController");

router.get("/api/donationItems", list);
router.get("/api/donationItems/:id", show);
router.post("/api/donationItems", create);

module.exports = router;