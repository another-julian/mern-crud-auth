import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({ error: ["the email alredy exist"] });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json(userSaved.toJSON());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ error: ["user not found"] });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ error: ["Incorrect password"] });

    const token = await createAccesToken({ id: userFound._id });

    res.cookie("token", token);
    res.json(userFound.toJSON());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const findUser = async (req, res) => {
  //const { user } = req.body;
  //const userFound = await User.findById(user.id);

  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(404).json({ error: ["User doesn't exist"] });

  return res.json(userFound.toJSON());
};
