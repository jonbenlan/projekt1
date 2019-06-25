import express from 'express';
const router = express.Router();

import {notesController} from '../controller/notesController.mjs';

router.get("/", notesController.getNotes.bind(notesController));
router.get("/unfinished", notesController.getUnfinished.bind(notesController));
router.post("/", notesController.createNote.bind(notesController));
router.get("/:id/", notesController.showNote.bind(notesController));
router.post("/:id/", notesController.updateNote.bind(notesController));

export const newNoteRoutes = router;