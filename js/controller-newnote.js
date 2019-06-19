// import {Note} from './note.js';
import {GetNotesData} from './getData.js';
import {NewNote} from './saveForm.js';
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
            
            window.location.href = "overview.html";

        });
    }
}

const controller = new ControllerNewNote();
controller.initEventHandlers();
