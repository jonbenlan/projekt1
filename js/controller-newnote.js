import {Note} from './note.js';
import {SaveNote} from './saveForm.js';
import {GetNotesData} from './getData.js';


class ControllerNewNote {
    constructor() {
        this.notesData = new GetNotesData();
    }
    initEventHandlers() {
        document.querySelector('.note-controls button').addEventListener("click", () => {
            Event.preventDefault();

            
            
            window.location.href = "overview.html";

        });
    }
}

document.addEventListener('DOMContentLoaded', ControllerNewNote.initEventHandlers());
