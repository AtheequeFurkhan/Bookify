import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verify.user.js";

const router = express.Router();

//get request
// router.get("/test", (req, res) => {
//   res.send("Hello World");
// });

router.get('/test',test);
router.post('/update/:id', verifyToken, updateUser);

export default router;
