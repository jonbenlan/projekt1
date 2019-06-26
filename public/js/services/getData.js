// const testOutput = {...localStorage};

// Object.keys(testOutput).forEach( (key) => {
//     const data = JSON.parse(testOutput[key]);
//     testOutput[key] = data;

// });


// function renderItems () {
//     document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
// }

// const render = renderItems();

import {Note} from './note.js';

export class GetNotesData {
    constructor() {
        const storage = JSON.parse(localStorage.getItem('notes') || "[ ]");
        this.storage = storage;
        this.notes = [ ];
    }
    
    getAll() {
        return this.storage;
    }

    loadData() {
        // console.log(this.storage);

        this.notes = this.storage.map(n => new Note(n.id, n.createDate, n.title, n.text, n.importance, n.dueDate));

        // this.notes = Object.keys(this.notesData).forEach( (key) => {
        //     const data = JSON.parse(this.notesData[key]);
        //     this.notesData[key] = data;
        
        // });
        

    }


    compareNotes(orderOption) {
        return (n1, n2) => {
            return n1[orderOption] - n2[orderOption];
        }
    }
    
    async sortNotes(notesData, orderOption) {
      
        this.notes = await notesData;
        return this.notes.sort(this.compareNotes(orderOption));

    }


    update(noteDone) {
        localStorage.setItem('notes', JSON.stringify(notes));
        return notes;
    }
}