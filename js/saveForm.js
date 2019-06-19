import {Note} from './note.js';

export class NewNote {
    constructor() {
        this.storage = [ ];
        
        this.title = document.querySelector('.note-content input[name="title"]').value;
        this.text = document.querySelector('.note-content textarea[name="text"]').value;
        this.importance = document.querySelector('.note-content input:checked').value;
        this.dueDate = document.querySelector('.note-content input[name="date"]').value;
        this.createDate = new Date();
    }

    addNote(notes) {
        this.storage = notes;

        const newNote = new Note(Object.keys(this.storage).length, this.createDate, this.title, this.text, this.importance, this.dueDate );

        this.storage.push(newNote.toJSON());

        localStorage.setItem('notes', JSON.stringify(this.storage));
    }

}

// function prepareData() {

//     const content = document.querySelector('.note-content');
//     const titleInput = content.querySelector('input[name="title"]');
//     const titleValue = titleInput.value;
//     const textInput = content.querySelector('textarea[name="text"]');
//     const textValue = textInput.value;
//     const checkedImportance = content.querySelector('input:checked');
//     const importanceValue = checkedImportance.value;
//     const dateInput = content.querySelector('input[name="date"]');
//     const dateValue = dateInput.value;

//     const dataObject = new Object();
//     dataObject["title"] = titleValue;
//     dataObject["text"] = textValue;
//     dataObject["importance"] = importanceValue;
//     dataObject["date"] = dateValue;

    
//     return JSON.stringify(dataObject);
// }

// const controls = document.querySelector('.note-controls button');


// controls.addEventListener("click", () => {
//     event.preventDefault();

//     let dataObjectName = new Date();

//     localStorage.setItem('notes', prepareData());

//     window.location.href = "overview.html";

// });
