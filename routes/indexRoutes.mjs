import express from 'express';
const router = express.Router();

import {notesController} from '../controller/notesController.mjs';

router.get("/", notesController.getNotes.bind(notesController));
router.post("/newnote", notesController.createNote.bind(notesController));

// console.log(notesController.getNotes());
export const indexRoutes = router;