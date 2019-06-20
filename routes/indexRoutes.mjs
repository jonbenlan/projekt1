import express from 'express';

const router = express.Router();
import {indexController} from '../controller/indexController.mjs';

router.get("/", indexController.notesStart.bind(indexController));

export const indexRoutes = router;