import { NoteService } from '../services/note-service.js';
import { GetNotesData } from '../services/getData.js';

export class ControllerOverview {
    constructor() {
        this.noteService = new NoteService();
        this.optionsButtons         = document.querySelectorAll('.options-container-order-items button');
        this.filterButton           = document.querySelector('.options-container-filter-button');
        this.notesData              = new NoteService().getUnfinished();

        this.notesOrderingService   = new GetNotesData();
        this.noteTemplateCompiled   = Handlebars.compile(document.getElementById('note-item-template').innerHTML);
        this.noteListContainer      = document.querySelector('.list-container-items');
        this.finishedInputs         = document.getElementsByClassName('js-input-done');

    }

    convertDates() {
        this.noteListContainer.querySelectorAll('.js-convert-date').forEach( (date) => {
            const convertedDate = new Date(Number(date.innerText));
            date.innerHTML = convertedDate.toLocaleDateString();
        })
    }

    async showNotes(notesData) {
       
        this.noteListContainer.innerHTML = this.noteTemplateCompiled({notes: await notesData });
        this.convertDates();
    
    }

    initEventHandlers() {
        this.optionsButtons.forEach( (button) => {

            button.addEventListener('click', () => {

                const orderOption = button.dataset.order;
                const sortedNotes = this.notesOrderingService.sortNotes(this.notesData, orderOption);
                this.showNotes(sortedNotes);

            })

        });


        Array.from(this.finishedInputs).forEach( (input) => {

            input.addEventListener('click', async event => {

                // update note

                let finishedDate = '';
                let noteID = input.dataset.noteId;
                const note = await this.noteService.getNote(noteID);

                if (input.checked) {

                    finishedDate = new Date().getTime();

                }

                await this.noteService.updateNote(noteID, note.createDate, note.title, note.text, note.importance, note.dueDate, finishedDate);


                console.log(finishedDate);
                //


                // remove note from complete data

                

            })
        });
        this.filterButton.addEventListener('click', () => {

        });
    }




    async notesStart() {

        await this.showNotes(this.notesData);
        this.initEventHandlers();
        
    }
}

export const controllerOverview = new ControllerOverview();