import User from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";

export const attachUser = async (req, res, next) => {
  const { uid, email, name, picture } = req.firebaseUser;

  let user = await User.findOne({ uid });

  if (!user) {
    // Create new user - users can be both donors and recipients
    user = await User.create({
      uid,
      email,
      name,
      avatar: picture,
      role: "donor" // Default role for new users
    });
  }
  // If user exists, just use the existing user (don't throw error)

  req.user = user; // MongoDB user
  next();
};
