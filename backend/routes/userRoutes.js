const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

//User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all user admin only
router.get("/:id", protect, adminOnly, getUserById); // Get a specific user
// router.get("/:id", protect, adminOnly, deleteUser); // Delete user (Admin only)


module.exports = router;