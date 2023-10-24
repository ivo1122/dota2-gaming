import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js"
import express from "express";
import {authenticate, restrict} from "../auth/verifyToken.js"

const router = express.Router();

router.get("/:id",authenticate,restrict(["player"]), getSingleUser);
router.get("/",authenticate,restrict(["admin"]), getAllUser);
router.put("/:id",authenticate,restrict(["player"]), updateUser);
router.delete("/:id",authenticate,restrict(["player"]), deleteUser);

export default router;
