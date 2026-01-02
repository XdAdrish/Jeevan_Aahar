import Profile from "../models/user.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/asyncHadler.js";

/**
 * POST /api/v1/auth/signup
 * 
 * Creates MongoDB profile after Firebase signup
 * 
 * Required body fields:
 * - name: user's full name
 * - role: "donor" or "recipient" (user-selected during signup)
 * 
 * Firebase user data (uid, email) comes from req.firebaseUser (set by auth middleware)
 */
export const signup = asyncHandler(async (req, res) => {
    const { name, role } = req.body;
    const { uid, email } = req.firebaseUser;

    // Validate required fields
    if (!name || !role) {
        return res.status(400).json({
            success: false,
            message: "Name and role are required",
        });
    }

    // Validate role
    if (!["donor", "recipient"].includes(role)) {
        return res.status(400).json({
            success: false,
            message: "Invalid role. Must be 'donor' or 'recipient'",
        });
    }

    // Check if profile already exists
    const existingProfile = await Profile.findOne({ uid });
    if (existingProfile) {
        return res.status(409).json({
            success: false,
            message: "Profile already exists for this user",
        });
    }

    // Create MongoDB profile with user-selected role
    const profile = await Profile.create({
        uid,
        email,
        name,
        role,
        isCompleted: false,
    });

    console.log(`✅ Profile created for ${email} as ${role}`);

    return res.status(201).json(
        new ApiResponse(201, profile, "Signup successful")
    );
});
