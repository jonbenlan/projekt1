// import {SecurityUtil} from '../utils/security';

export class IndexController {
    // async login(req, res) {

    //     SecurityUtil.handleLogin(req, res);
    // };
    constructor(notesData) {
        this.optionsButtons         = document.querySelectorAll('.options-container-order-items button');
        this.filterButton           = document.querySelector('.options-container-filter-button');
        this.finishedInputs         = document.getElementsByClassName('js-input-done');

        this.notesData              = notesData;
        this.noteTemplateCompiled   = Handlebars.compile(document.getElementById('note-item-template').innerHTML);
        this.noteListContainer      = document.querySelector('.list-container-items');
    }

    convertDates() {
        this.noteListContainer.querySelectorAll('.js-convert-date').forEach( (date) => {
            const convertedDate = new Date(Number(date.innerText));
            date.innerHTML = convertedDate.toLocaleDateString();
        })
    }

    showNotes() {
        this.noteListContainer.innerHTML = this.noteTemplateCompiled(this.notesData.storage);
        this.convertDates();
    }

    initEventHandlers() {
        this.optionsButtons.forEach( (button) => {
            button.addEventListener('click', () => {
                const orderOption = button.dataset.order;
                this.newOrder(orderOption);
            })
        });
        Array.from(this.finishedInputs).forEach( (input) => {
            input.addEventListener('click', () => {
                // this.newOrder(orderOption);
                console.log(this.notesData.storage);
                
            })
        });
        this.filterButton.addEventListener('click', () => {

        });
    }

    newOrder(orderOption) {
        this.notesData.loadData();
        this.notesData.sortNotes(orderOption); 
        this.showNotes();
    }


    notesStart() {
        this.notesData.getAll();
        this.showNotes();
        this.initEventHandlers();
        
    }
}

export const indexController = new IndexController();
