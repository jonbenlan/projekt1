import {GetNotesData} from './getData.js';
import {ControllerOverview} from './controller-overview.js';

class Bootstrapper {
    static start() {
        const notesData = new GetNotesData();
        new ControllerOverview(notesData).notesStart();
    }
}

document.addEventListener('DOMContentLoaded', Bootstrapper.start());
