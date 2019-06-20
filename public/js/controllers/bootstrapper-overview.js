import {GetNotesData} from '../services/getData.js';
import {ControllerOverview} from '../controllers/controller-overview.js/index.js.js';


class Bootstrapper {
    static start() {
console.log('ya');

        const notesData = new GetNotesData();
        new ControllerOverview(notesData).notesStart();
    }
}

document.addEventListener('DOMContentLoaded', Bootstrapper.start());

