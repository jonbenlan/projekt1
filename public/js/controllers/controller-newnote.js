// import {Note} from './note.js';
import {GetNotesData} from '../services/getData.js';
import {NewNote} from '../services/saveForm.js';
// import {GetNotesData} from './handleImportance.js';
import { noteService } from '../services/note-service.js'


class ControllerNewNote {
    constructor() {
        // this.notesData = new GetNotesData();
        
        this.title = document.querySelector('.note-content input[name="title"]').value;
        this.text = document.querySelector('.note-content textarea[name="text"]').value;
        this.importance = document.getElementsByTagName('input:checked').value;
        this.dueDate = document.querySelector('.note-content input[name="date"]').value;
        this.dueDate = new Date(this.dueDate).getTime();
        this.createDate = Date.now();
    }
    initEventHandlers() {
        document.querySelector('.note-controls button').addEventListener("click", async event => {
            event.preventDefault();

            await noteService.createNote(this.createDate, this.title, this.text, this.importance, this.dueDate );

    
            // this.NewNote = new NewNote();

            // const notes = this.notesData.getAll();
            
            // this.NewNote.addNote(notes);
            
            window.location.href = "/";

        });
    }
}

const controller = new ControllerNewNote();
controller.initEventHandlers();
