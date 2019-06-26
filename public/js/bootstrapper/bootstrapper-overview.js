import {GetNotesData} from '../services/getData.js';
import {ControllerOverview} from '../controllers/controller-overview.js';


class Bootstrapper {
    static start() {

        const notesData = new GetNotesData();
        new ControllerOverview(notesData).notesStart();
    }
}

document.addEventListener('DOMContentLoaded', Bootstrapper.start());

