import {updatedCoach, getSingleCoach, deleteCoach, getAllCoaches} from "../Controllers/coachController.js"
import express from "express";
import {authenticate,restrict} from "../auth/verifyToken.js"
import reviewRouter from "./review.js"



const router = express.Router();


//nested route

//nestertRoute
router.use("/:coachId/reviews", reviewRouter)

router.get("/:id", getSingleCoach);
router.get("/", getAllCoaches);
router.put("/:id",authenticate,restrict(["coach"]), updatedCoach);
router.delete("/:id",authenticate,restrict(["coach"]), deleteCoach);

export default router;
