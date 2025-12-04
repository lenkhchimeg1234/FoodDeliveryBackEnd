const jwt = require("jsonwebtoken");
const JWT_SECRET = "This is the secret";

const verifyJWT = (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    res.status(401).json({ message: "No token provided" });
  }
  const token = authorization.split(" ")[1];
  console.log("token", token);

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = verifyJWT;
