const jwt = require("jsonwebtoken");
const JWT_SECRET = "This is the secret";

const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: "24h" });
};

module.exports = { generateToken };
