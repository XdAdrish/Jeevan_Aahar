import { Router } from "express";
import { createDonationForm, getAllDonations } from "../controllers/donationcontrollers.js";

const router = Router();

router.route("/").post(createDonationForm).get(getAllDonations);

export default router;

