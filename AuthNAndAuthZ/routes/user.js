const express = require("express");
const router = express.Router();


// Import Controller..

const { login, signup } = require("../controllers/Auth");
const { auth, isAdmin, isStudent } = require("../middleware/auth")



// Mapping Create..
router.post("/login", login);
router.post("/signup",signup);

// Testing Route for Middleware
router.get("/test", auth, (req,res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})

// Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Student"
    })
});

// Protected Route for Admin 
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});



// Export..

module.exports = router;
