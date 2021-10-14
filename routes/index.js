import express from "express";
import * as notes from "./notes.js";

const router = express.Router();

router.get("/notes", notes.list) // List
router.post("/notes", notes.create) // Create
router.get("/notes/:id", notes.read) // Read
router.post("/notes/:id", notes.update) // Update
router.delete("/notes/:id", notes.deleteNote) // Delete

export default router;