import { ApiResponse } from "../utils/api-response.js";
import { donationForm } from "../models/formDonation.model.js";

const createDonationForm = async (req, res) => {
  try {
    console.log("📦 Creating donation with body:", req.body);
    console.log("👤 Logged in user:", req.user?._id);

    if (!req.user?._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not found",
      });
    }

    const {
      name,
      quantity,
      foodType,
      email,
      phone,
      address,
      preparedAt,
      additionalNote,
      landmark,
      pickupTime,
      pickupDate,
      picture,
    } = req.body;

    // Required fields (NO picture here)
    const requiredFields = {
      name,
      quantity,
      foodType,
      email,
      phone,
      address,
      preparedAt,
      pickupDate,
      pickupTime,
    };

    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({
          success: false,
          message: `Field '${key}' is required`,
        });
      }
    }

    const donation = await donationForm.create({
      name,
      quantity,
      foodType,
      email,
      phone,
      address,
      preparedAt: new Date(preparedAt),
      pickupDate: new Date(pickupDate),
      pickupTime: new Date(pickupTime),
      additionalNote,
      landmark,
      picture, // should be URL later
      donor: req.user._id,
    });

    return res.status(201).json(
      new ApiResponse(201, donation, "Donation created successfully")
    );

  } catch (error) {
    console.error("❌ Donation creation failed:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const getAllDonations = async (req, res) => {
  try {
    const donations = await donationForm
      .find()
      .sort({ createdAt: -1 });

    return res
      .status(200)
      .json(new ApiResponse(200, donations, "Donations fetched successfully"));
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch donations",
    });
  }
};

export { createDonationForm, getAllDonations };
