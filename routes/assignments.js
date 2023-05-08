import express from "express";
import {
  getAllAssignments,
  createAssignment,
  // getAssignment,
  // updateAssignment,
  removeAssignment,
} from "../controllers/assignments.js";

const router = express.Router();

router.route("/").get(getAllAssignments).post(createAssignment);

router.route("/:id").delete(removeAssignment);
// .get(getAssignment)
// .patch(updateAssignment)

export default router;
