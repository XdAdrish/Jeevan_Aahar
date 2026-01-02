import admin from "../config/firebaseAdmin.js";
import Profile from "../models/user.models.js";

/**
 * Lightweight Firebase Authentication (for signup)
 * 
 * Only verifies Firebase token and attaches firebaseUser
 * Does NOT load MongoDB profile (used for signup endpoint)
 */
export const authenticateFirebaseOnly = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No authentication token provided"
      });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    req.firebaseUser = decodedToken;
    next();
  } catch (error) {
    console.error("❌ Firebase authentication failed:", error.message);

    if (error.code === "auth/id-token-expired") {
      return res.status(401).json({
        success: false,
        message: "Authentication token expired. Please sign in again.",
      });
    }

    res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

/**
 * Firebase Authentication + Load Profile Middleware
 * 
 * This middleware:
 * 1. Verifies Firebase ID token
 * 2. Loads existing MongoDB profile
 * 3. Attaches profile to req.profile (or null if not found)
 * 
 * Used for post-signup routes only
 */
export const authenticateAndLoadProfile = async (req, res, next) => {
  try {
    // 1. Verify Firebase token
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No authentication token provided"
      });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    // 2. Extract Firebase user data
    const { uid, email, name } = decodedToken;

    // 3. Load existing profile (do NOT auto-create)
    const profile = await Profile.findOne({ uid });

    // 4. Attach to request
    req.profile = profile; // Will be null if user hasn't completed signup
    req.firebaseUser = decodedToken;

    next();
  } catch (error) {
    console.error("❌ Authentication failed:", error.message);

    if (error.code === "auth/id-token-expired") {
      return res.status(401).json({
        success: false,
        message: "Authentication token expired. Please sign in again.",
      });
    }

    res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

/**
 * Profile Completion Guard Middleware
 * 
 * Blocks access to donation routes if profile is not completed
 */
export const requireCompletedProfile = (req, res, next) => {
  if (!req.profile) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  if (!req.profile.isCompleted) {
    return res.status(403).json({
      success: false,
      message: "Profile completion required to access this resource",
      isCompleted: false,
    });
  }

  next();
};
