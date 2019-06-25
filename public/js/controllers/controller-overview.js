import { NoteService } from '../services/note-service.js';
import { GetNotesData } from '../services/getData.js';

export class ControllerOverview {
    constructor() {
        this.noteService = new NoteService();
        this.optionsButtons         = document.querySelectorAll('.options-container-order-items button');
        this.filterButton           = document.querySelector('.options-container-filter-button');
        this.noteService            = new NoteService();
        this.notesData              = '';

        this.notesOrderingService   = new GetNotesData();
        this.noteTemplateCompiled   = Handlebars.compile(document.getElementById('note-item-template').innerHTML);
        this.noteListContainer      = document.querySelector('.list-container-items');
        this.finishedInputs         = document.getElementsByClassName('js-input-done');

    }

    tickFinished() {

    }

    convertDates() {
        this.noteListContainer.querySelectorAll('.js-convert-date').forEach( (date) => {
            const convertedDate = new Date(Number(date.innerText));
            date.innerHTML = convertedDate.toLocaleDateString();
        })
    }

    async showNotes(notesData) {

        this.notesData = notesData;

        this.noteListContainer.innerHTML = this.noteTemplateCompiled({notes: await notesData });

        await this.convertDates();

        await this.tickFinished(notesData);


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

                let finishedDate = '';
                let noteID = input.dataset.noteId;
                const note = await this.noteService.getNote(noteID);

                if (input.checked) {

                    finishedDate = new Date().getTime();

                }

                await this.noteService.updateNote(noteID, note.createDate, note.title, note.text, note.importance, note.dueDate, finishedDate);

            })
        });


        this.filterButton.addEventListener('click', async event => {

            event.target.classList.toggle('js-visited');

            if (event.target.classList.contains('js-visited')) {

                await this.showNotes(this.noteService.getNotes());

            } else {

                await this.showNotes(this.noteService.getNotes('unfinished'));

            }


        });
    }




    async notesStart() {

        await this.showNotes(this.noteService.getNotes('unfinished'));
        this.initEventHandlers();
        
    }
}

export const controllerOverview = new ControllerOverview();