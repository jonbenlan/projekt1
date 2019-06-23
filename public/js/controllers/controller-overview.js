import { NoteService } from '../services/note-service.js';
import { GetNotesData } from '../services/getData.js';

export class ControllerOverview {
    constructor() {
        this.optionsButtons         = document.querySelectorAll('.options-container-order-items button');
        this.filterButton           = document.querySelector('.options-container-filter-button');
        this.finishedInputs         = document.getElementsByClassName('js-input-done');

        this.notesData              = new NoteService().getNotes();
        this.notesOrderingService   = new GetNotesData();
        this.noteTemplateCompiled   = Handlebars.compile(document.getElementById('note-item-template').innerHTML);
        this.noteListContainer      = document.querySelector('.list-container-items');
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
            input.addEventListener('click', () => {
                // this.newOrder(orderOption);
                // console.log(this.notesData.storage);
                
            })
        });
        this.filterButton.addEventListener('click', () => {

        });
    }

    // newOrder(orderOption) {
    //     this.notesData.loadData();
    //     this.notesData.sortNotes(orderOption); 
    //     this.showNotes();
    // }


    async notesStart() {

        this.showNotes(this.notesData);
        this.initEventHandlers();
        
    }
}

export const controllerOverview = new ControllerOverview();