import { verifyToken } from "../libs/token.js";

const tokenControll = async (req, res, next) => {
  // Token kontrolü burada yapılır
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const isValidToken = await verifyToken(token);
  if (isValidToken) {
    next();
  } else {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default tokenControll;
