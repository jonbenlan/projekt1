// import {Note} from './note.js';
// import {GetNotesData} from '../services/getData.js';
// import {NewNote} from '../services/saveForm.js';
// import {GetNotesData} from './handleImportance.js';
import { NoteService } from '../services/note-service.js'
import { importanceService } from '../services/importance-service.js    '


class ControllerNewNote {
    constructor() {
        // this.notesData = new GetNotesData();
        this.noteService = new NoteService();

        this.importanceService = new importanceService();
        this.importance = this.importanceService.importance;
        this.importanceContainer = this.importanceService.importanceContainer;

        this.title = document.querySelector('.note-content input[name="title"]').value;
        this.text = document.querySelector('.note-content textarea[name="text"]').value;
        this.dueDate = document.querySelector('.note-content input[name="date"]').value;
        this.dueDate = new Date(this.dueDate).getTime();
        this.createDate = Date.now();
    }
    initEventHandlers() {

        document.querySelector('.note-controls button').addEventListener("click", async event => {
            event.preventDefault();

            await this.noteService.createNote(this.createDate, this.title, this.text, this.importance, this.dueDate );

    
            // this.NewNote = new NewNote();

            // const notes = this.notesData.getAll();
            
            // this.NewNote.addNote(notes);
            
            window.location.href = "/";

        });
        this.importanceContainer.addEventListener("click", () => {
            this.importance = event.target.value;
            this.importanceService.highlight(this.importance);
        });
    }
}

const controller = new ControllerNewNote();
controller.initEventHandlers();
