const express = require('express');
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/DonationController");

router.get("/api/donations", list);
router.get("/api/donations/:id", show);
router.post("/api/donations", create);
router.put("/api/donations/:id", update);
router.delete("/api/donations/:id", remove);

module.exports = router;