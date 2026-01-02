import { Router } from "express";
import { getProfile, updateProfile, getUserByUid } from "../controllers/user.controller.js";
import { signup } from "../controllers/auth.controller.js";
import { authenticateFirebaseOnly, authenticateAndLoadProfile } from "../middlewares/firebase.js";

const router = Router();

/**
 * Auth Routes
 */
// POST /auth/signup - Create MongoDB profile after Firebase signup
// Uses lightweight auth (no profile loading)
router.post("/auth/signup", authenticateFirebaseOnly, signup);

/**
 * Profile Routes
 * 
 * GET /profile - Get current user's profile
 * PATCH /profile - Update profile (complete profile)
 * GET /profile/:uid - Get public profile by UID
 */
router.get("/profile", authenticateAndLoadProfile, getProfile);
router.patch("/profile", authenticateAndLoadProfile, updateProfile);
router.get("/profile/:uid", getUserByUid); // Public endpoint, no auth required

export default router;

