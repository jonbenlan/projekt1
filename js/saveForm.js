import {Note} from ('./note');

function prepareData() {

    const content = document.querySelector('.note-content');
    const titleInput = content.querySelector('input[name="title"]');
    const titleValue = titleInput.value;
    const textInput = content.querySelector('textarea[name="text"]');
    const textValue = textInput.value;
    const checkedImportance = content.querySelector('input:checked');
    const importanceValue = checkedImportance.value;
    const dateInput = content.querySelector('input[name="date"]');
    const dateValue = dateInput.value;

    const dataObject = new Object();
    dataObject["title"] = titleValue;
    dataObject["text"] = textValue;
    dataObject["importance"] = importanceValue;
    dataObject["date"] = dateValue;

    
    return JSON.stringify(dataObject);
}

const controls = document.querySelector('.note-controls button');


controls.addEventListener("click", () => {
    event.preventDefault();

    let dataObjectName = new Date();

    localStorage.setItem('notes', prepareData());

    window.location.href = "overview.html";

});

class SaveNote {
    constructor() {
        const storage = JSON.parse(localStorage.getItem('notes') || "[ ]");
        this.storage = storage;
    }

    addNote() {
        const Note = new Note(

        )
    }
}