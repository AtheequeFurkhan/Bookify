import express from "express";
import { test, updateUser, deleteUser, signOut, getUserListings } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verify.user.js";

const router = express.Router();

//get request
// router.get("/test", (req, res) => {
//   res.send("Hello World");
// });

router.get('/test',test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/signout', signOut);
router.get('/listings/:id', verifyToken, getUserListings);

export default router;
