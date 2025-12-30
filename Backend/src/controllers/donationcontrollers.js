import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHadler.js";
import { donationForm } from "../models/formDonation.model.js";

const createDonationForm = asyncHandler(async (req, res) => {
    const {
        name,
        quantity,
        foodType,
        email,
        phone,
        address,
        preparedAt,
        picture,
        additionalNote,
        landmark,
        pickupTime,
        pickupDate,
    } = req.body;

    if (!name || !quantity || !foodType || !email || !phone || !address || !preparedAt || !picture || !pickupTime || !pickupDate) {
        throw new Error("All fields are required");
    }
    const form = await donationForm.create({
        name,
        quantity,
        foodType,
        email,
        phone,
        address,
        preparedAt,
        picture,
        additionalNote,
        landmark,
        pickupTime,
        pickupDate,
    });

    if (!form) {
        throw new ApiError(500, "Something went wrong");
    }

    res.status(201).json(new ApiResponse(201, form, "form created successfully"));

});

const getAllDonations = asyncHandler(async (req, res) => {
    const donations = await donationForm.find().sort({ createdAt: -1 });

    if (!donations) {
        throw new ApiError(404, "No donations found");
    }

    res.status(200).json(new ApiResponse(200, donations, "Donations fetched successfully"));
});

export { createDonationForm, getAllDonations };