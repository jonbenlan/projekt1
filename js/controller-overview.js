export class ControllerOverview {
    constructor(notesData) {
        this.optionsButtons         = document.querySelectorAll('.options-container-order-items button');

        // this.notesData              = notesData;
        this.noteTemplateCompiled   = Handlebars.compile(document.getElementById('note-item-template').innerHTML);
        this.noteListContainer      = document.querySelector('.list-container-items');
    }

    showNotes() {
        this.noteListContainer.innerHTML = this.noteTemplateCompiled(notes);
    }

    initEventHandlers() {
        this.optionsButtons.forEach( (button) => {
            button.addEventListener('click', () => {
                const orderOption = button.dataset.order;
                newOrder(orderOption);
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
        this.notesData.loadData();
        this.showNotes();
    }
}