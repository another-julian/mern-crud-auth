import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ error: ["No token, acces denied"] });

  jwt.verify(token, TOKEN_SECRET, (err, userToken) => {
    if (err) return res.status(403).json({ error: ["invalid token"] });
    req.user = userToken;
    next();
  });
};
