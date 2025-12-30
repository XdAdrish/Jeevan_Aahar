import { Router } from "express";
import {
  createDonationForm,
  getAllDonations,
} from "../controllers/donationcontrollers.js";

import { firebaseAuth } from "../middlewares/firebase.js";
import { attachUser } from "../middlewares/attached.js";
import { requireRole } from "../middlewares/rbac.js";

const router = Router();

router
  .route("/")
  .post(firebaseAuth, attachUser, requireRole("donor"), createDonationForm)
  .get(firebaseAuth, attachUser, requireRole("donor"), getAllDonations);


export default router;
