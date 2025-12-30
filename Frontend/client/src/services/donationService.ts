import { auth } from "@/config/firebase";

// Backend API base URL - update this based on your backend configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export interface DonationFormData {
    name: string;
    quantity: number;
    foodType: string;
    email: string;
    phone: string;
    address: string;
    preparedAt: Date;
    picture: string;
    additionalNote?: string;
    landmark?: string;
    pickupTime: Date;
    pickupDate: Date;
}

export interface DonationResponse {
    _id: string;
    name: string;
    quantity: number;
    foodType: string;
    email: string;
    phone: string;
    address: string;
    preparedAt: Date;
    picture: string;
    additionalNote?: string;
    landmark?: string;
    pickupTime: Date;
    pickupDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface ApiResponse<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
}

/**
 * Create a new donation
 */
export async function createDonation(
    donationData: DonationFormData
): Promise<ApiResponse<DonationResponse>> {
    try {
        // Get the current user's ID token for authentication
        const user = auth.currentUser;
        const token = user ? await user.getIdToken() : null;

        const response = await fetch(`${API_BASE_URL}/api/v1/donation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            body: JSON.stringify(donationData),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                errorData.message || `Failed to create donation: ${response.statusText}`
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating donation:", error);
        throw error;
    }
}

/**
 * Get all donations (placeholder - backend endpoint needs to be implemented)
 */
export async function getDonations(): Promise<ApiResponse<DonationResponse[]>> {
    try {
        const user = auth.currentUser;
        const token = user ? await user.getIdToken() : null;

        const response = await fetch(`${API_BASE_URL}/api/v1/donation`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                errorData.message || `Failed to fetch donations: ${response.statusText}`
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching donations:", error);
        throw error;
    }
}

/**
 * Convert image file to base64 string
 */
export function convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
