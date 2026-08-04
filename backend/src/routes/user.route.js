import express from "express";
import { getUserProfile,updateProfile,getCurrentUser,syncUser,followUser } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
//public routes
router.get("/profile/:userName",  getUserProfile);

//private routes
router.post("/async", protectRoute,syncUser);
router.post("/me", protectRoute,getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;