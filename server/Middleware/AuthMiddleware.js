const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT
    res.json({ message: "Token is valid", user: decoded }); // Send success response
  } catch (error) {
    res.status(403).json({ message: "Invalid token" }); // Send error response
  }
}