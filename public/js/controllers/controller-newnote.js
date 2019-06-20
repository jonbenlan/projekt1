// import {Note} from './note.js';
import {GetNotesData} from '../services/getData.js';
import {NewNote} from '../services/saveForm.js';
// import {GetNotesData} from './handleImportance.js';


class ControllerNewNote {
    constructor() {
        this.notesData = new GetNotesData();
    }
    initEventHandlers() {
        document.querySelector('.note-controls button').addEventListener("click", () => {
            event.preventDefault();
    
            this.NewNote = new NewNote();

            const notes = this.notesData.getAll();
            
            this.NewNote.addNote(notes);
            
            window.location.href = "/";

        });
    }
}

const controller = new ControllerNewNote();
controller.initEventHandlers();
