import admin from "../config/firebaseAdmin.js";

export const firebaseAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decodedToken = await admin.auth().verifyIdToken(token);

    req.firebaseUser = decodedToken;
    next();
  } catch (error) {
    console.error("❌ Firebase token verification failed:", error.message);
    res.status(401).json({
      error: "Internal Server Error: Firebase Config Failed",
    });
  }
};
