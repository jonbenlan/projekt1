// import {GetNotesData} from '../services/getData.js';
// import {controllerOverview} from '../controllers/controller-overview.js/index.js.js';


class Bootstrapper {
    static async start() {

        // const notesData = new GetNotesData();
        await new ControllerOverview().notesStart();
    }
}

document.addEventListener('DOMContentLoaded', Bootstrapper.start());

controllerOverview.notesStart();
