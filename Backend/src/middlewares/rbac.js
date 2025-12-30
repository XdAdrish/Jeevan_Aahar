export const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    next();
  };
};
