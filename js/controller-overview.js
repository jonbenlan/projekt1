export class ControllerOverview {
    constructor(notesData) {

        this.notesData              = notesData;
        this.noteTemplateCompiled   = Handlebars.compile(document.getElementById('note-item-template').innerHTML);
        this.noteListContainer      = document.querySelector('.list-container-items');
    }

    showNotes() {
        this.noteListContainer.innerHTML = this.noteTemplateCompiled(this.notesData.getAll());
    }

    initEventHandlers() {

    }


    notesStart() {
        this.initEventHandlers();
        // this.notesData.getAll();
        this.showNotes();
    }
}