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

        this.errorMessage = document.querySelector('.error-message');

    }

    toggleErrors() {
        this.title.classList.toggle('error-inputs');
        this.text.classList.toggle('error-inputs');
        this.errorMessage.classList.toggle('show');
    }

    async validateForm() {
        
        this.title.value = this.title.value.trim();
        // this.text.value = this.text.value.replace(/\s/g, '');
        !str.replace(/\s+/, '').length
        
        console.log(typeof this.title.value);
        
        if (!this.title.value && !this.text.value) {
            this.toggleErrors();
            // return await false;
        }

        // return true;
    }

    initEventHandlers() {

        // Array.from(document.getElementsByClassName('error-inputs')).forEach( (errorInput) => {
        //     console.log(errorInput); 
        //     errorInput.addEventListener('focus', () => {
        //             this.toggleErrors();
        //     }, {once: true});
        // });

        document.querySelector('.note-controls button').addEventListener("click", async event => {
            
            event.preventDefault();

            await this.validateForm();

            console.log(await this.validateForm());

            // if (await this.validateForm()) {


                if (this.noteID) {

                    await this.noteService.updateNote(this.noteID, this.createDate, this.title.value, this.text.value, this.importance, new Date(this.dueDate.value).getTime(), this.finishedDate);

                } else {

                    await this.noteService.createNote(this.createDate, this.title.value, this.text.value, this.importance, new Date(this.dueDate.value).getTime(), this.finishedDate);

                }

                // window.location.href = "/";

            // }

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
