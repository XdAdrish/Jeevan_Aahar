import mongoose, { Schema } from "mongoose";

const donationFormSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        foodType: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        preparedAt: {
            type: Date,
            default: Date.now,
        },
        picture: {
            type: String,
            required: true,
        },
        additionalNote: {
            type: String,
        },
        landmark: {
            type: String,
        },
        pickupTime: {
            type: Date,
            required: true
        },
        pickupDate: {
            type: Date,
            required: true
        },
        donor: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,

    }
);

export const donationForm = mongoose.model("forms", donationFormSchema);