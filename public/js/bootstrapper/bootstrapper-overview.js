import {ControllerOverview} from '../controllers/controller-overview.js';

class Bootstrapper {

    static start() {
        
        new ControllerOverview().notesStart();
    
    }

}

document.addEventListener('DOMContentLoaded', Bootstrapper.start());

