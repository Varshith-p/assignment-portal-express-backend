import Assignment from "../models/Assignment.js";
import asyncHandler from "express-async-handler";

export const getAllAssignments = asyncHandler(async (req, res) => {
  const assignments = await Assignment.find().sort({ endDate: 1 });
  return res.status(200).json(assignments);
});

export const createAssignment = asyncHandler(async (req, res) => {
  const { name, subject, startDate, endDate } = req.body;
  if (!name | !subject | !startDate | !endDate) {
    throw new Error("Provide all values");
  }
  const assignment = await Assignment.create(req.body);
  res.status(201).json({ assignment });
});

// export const getAssignment = (req, res) => {
//   res.send("Hello");
// };

export const removeAssignment = asyncHandler(async (req, res) => {
  const { id: assignmentId } = req.params;
  const assignment = await Assignment.findOneAndDelete({
    _id: assignmentId,
  });
  if (!assignment) {
    return res.status(404).json({ msg: `No task with id ${assignmentId}` });
  }
  res.status(200).json({ assignment });
});

// export const updateAssignment = (req, res) => {
//   res.send("Hello");
// };
