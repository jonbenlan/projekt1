export class ControllerOverview {
    constructor(notesData) {
        this.optionsButtons         = document.querySelectorAll('.options-container-order-items button');

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
    }

    newOrder(orderOption) {
        this.notesData.loadData();
        this.notesData.sortNotes(orderOption); 
        this.showNotes();
    }


    notesStart() {
        this.initEventHandlers();
        this.notesData.getAll();
        this.showNotes();
    }
}