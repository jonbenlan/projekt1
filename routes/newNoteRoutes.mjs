import express from 'express';
const router = express.Router();
import {notesController} from '../controller/notesController.mjs';


router.get("/", notesController.getNotes.bind(notesController));
router.post("/", notesController.createNote.bind(notesController));
// router.get("/:id/", ordersController.showOrder.bind(notesController));

export const newNoteRoutes = router;