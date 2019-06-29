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
        this.styleChanger           = document.querySelector('.header-container-dropdown');

        this.finishedInputs         = document.getElementsByClassName('js-input-done');
        this.noteShowMore           = document.getElementsByClassName('list-container-item-content-toggle');

    }

    async handleShowMoreButtons() {
    
        Array.from(this.noteShowMore).forEach( async (toggle) => {
            
            if (toggle.clientHeight < 50) {
    
                await toggle.classList.add('hide');
    
            }
    
        });
    
    }

    async tickFinished(notesData) {
  
        let notesD = await notesData;
  
        await notesD.forEach( (note) => {
  
            if (note.finishedDate) {
  
                const input = this.noteListContainer.querySelector(`[data-note-id="${note._id}"]`);
  
                input.checked = true;
  
            }
        });

    }

    async convertDates() {
     
        await this.noteListContainer.querySelectorAll('.js-convert-date').forEach( async (date) => {
     
            const convertedDate = new Date(Number(date.innerText));
     
            date.innerHTML = await convertedDate.toLocaleDateString();
     
        });
    }

    async showNotes(notesData) {

        this.notesData = notesData;

        this.noteListContainer.innerHTML = this.noteTemplateCompiled({notes: await notesData });

        this.convertDates();

        this.tickFinished(notesData);

        this.handleShowMoreButtons();

    }

    initEventHandlers() {

        Array.from(this.noteShowMore).forEach( async (toggle) => {
  
            await toggle.addEventListener('click', async () => {

                const toggleContainer = toggle.closest('.list-container-item-content');

                toggleContainer.classList.toggle('expand');

            });

        });
        
        this.optionsButtons.forEach( (button) => {

            button.addEventListener('click', () => {

                const orderOption = button.dataset.order;
                const sortedNotes = this.notesOrderingService.sortNotes(this.notesData, orderOption);
                this.showNotes(sortedNotes);

            })
        });
        
        Array.from(this.finishedInputs).forEach( async (input) => {
            
            input.addEventListener('click', async () => {
                
                let finishedDate = '';
                let noteID = input.dataset.noteId;
                const note = await this.noteService.getNote(noteID);
                
                if (input.checked) {

                    finishedDate = new Date().getTime();

                }

                await this.noteService.updateNote(noteID, note.createDate, note.title, note.text, note.importance, note.dueDate, finishedDate);

            })
        });


        this.filterButton.addEventListener('click', async () => {

            event.target.classList.toggle('js-visited');

            if (event.target.classList.contains('js-visited')) {

                await this.showNotes(this.noteService.getNotes());

            } else {

                await this.showNotes(this.noteService.getNotes('unfinished'));

            }

            await this.initEventHandlers();

        }, {once: true});
    }




    async notesStart() {

        await this.showNotes(this.noteService.getNotes('unfinished'));
        this.initEventHandlers();
        
    }
}

export const controllerOverview = new ControllerOverview();