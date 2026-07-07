import { Router } from "express";
import emailController from "../controllers/emailController";

const router = Router();


router.post("/Account-Create",emailController.CreateCount)
router.post("/NotiDonor",emailController.NotifyDonor)
router.post("/CancelOrder",emailController.cancelOrder)

router.post("/UserAccount-Create",emailController.UserAccountCreate)
router.post("/NotifyUserOrder",emailController.UserOrderNotify)
export default router;