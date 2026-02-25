const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const router = require("./userRoutes");


// Task Management Routers
router.get("dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks);// Get All tasks (Admin: all, User: assigned)
router.get("/:id", protect, getTaskById); // Get task by ID
router.post("/", protect, adminOnly, createTask);  // Crate a task (Admin only)
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, deleteTask); // Delete. a task (asmin only)
router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskChecklist); // Update task checklist

module.exports = router;