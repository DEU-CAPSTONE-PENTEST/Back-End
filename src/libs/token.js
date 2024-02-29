import jwt from "jsonwebtoken";

async function generateToken(data) {
  const token = await jwt.sign({ data }, "secretKey", {
    expiresIn: "1h",
  });
  return Promise.resolve(token);
}
async function verifyToken(token) {
  const data = await jwt.verify(token, "secretKey");
  return data;
}

export { verifyToken, generateToken };
