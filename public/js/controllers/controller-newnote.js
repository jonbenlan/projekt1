import { NoteService } from '../services/note-service.js'
import { importanceService } from '../services/importance-service.js    '

class ControllerNewNote {

    constructor() {

        this.noteID     = window.location.hash.substring(1);
        this.noteService = new NoteService();
        this.importanceService = new importanceService();

        this.importance = this.importanceService.importance;
        this.importanceContainer = this.importanceService.importanceContainer;
        this.title = document.getElementById('title');
        this.text = document.getElementById('text');
        this.dueDate = document.getElementById('dueDate');
        this.createDate = Date.now();
        this.finishedDate = '';

    }

    initEventHandlers() {

        document.querySelector('.note-controls button').addEventListener("click", async event => {
            
            event.preventDefault();

            if (this.noteID) {

                await this.noteService.updateNote(this.noteID, this.createDate, this.title.value, this.text.value, this.importance, new Date(this.dueDate.value).getTime(), this.finishedDate);

            } else {

                await this.noteService.createNote(this.createDate, this.title.value, this.text.value, this.importance, new Date(this.dueDate.value).getTime(), this.finishedDate);

            }

            window.location.href = "/";

        });

        this.importanceContainer.addEventListener("click", () => {
           
            this.importance = event.target.value;
           
            this.importanceService.highlight(this.importance);
        
        });
    
    }

    async renderZeroState() {

        if (this.noteID) {

            const note = await this.noteService.getNote(this.noteID);
            this.title.value = note.title;
            this.text.value = note.text;
            this.importanceService.highlight(note.importance);
            this.dueDate.value = new Date(Number(note.dueDate));
            this.finishedDate = note.finishedDate;

        }

        this.initEventHandlers();

    }
    
}

const controller = new ControllerNewNote();
controller.renderZeroState();
