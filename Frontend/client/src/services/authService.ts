import { auth } from "@/config/firebase";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000").replace(/\/+$/, "");

/**
 * Complete signup by creating MongoDB profile
 * 
 * Called after Firebase account creation
 * Creates MongoDB profile with user-selected role
 */
export async function completeSignup(name: string, role: "donor" | "recipient"): Promise<void> {
    const user = auth.currentUser;
    const token = user ? await user.getIdToken() : null;

    if (!token) {
        throw new Error("User not authenticated");
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, role }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Signup failed");
    }
}
