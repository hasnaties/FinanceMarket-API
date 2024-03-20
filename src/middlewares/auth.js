import c from "config";
import Jwt from "jsonwebtoken";
import Profile from "../models/profileModel.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace("Bearer ", "");
    const decoded = Jwt.verify(token, c.get('app.secret_key'));
    const profile = await Profile.findOne({ '_id': decoded._id, 'tokens.token': token });

    req.token = token;
    req.profile = profile;

    next();
  } catch (error) {
    res.status(401).json({ error: "Authorization failed." })
  }
};

export default auth;