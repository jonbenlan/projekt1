// const testOutput = {...localStorage};

// Object.keys(testOutput).forEach( (key) => {
//     const data = JSON.parse(testOutput[key]);
//     testOutput[key] = data;

// });


// function renderItems () {
//     document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
// }

// const render = renderItems();

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

        this.notes = this.storage.getAll().map(n => new Note(n.id, n.createDate, n.finishDate, n.title, n.text, n.importance, n.dueDate));


        // this.notes = Object.keys(this.notesData).forEach( (key) => {
        //     const data = JSON.parse(this.notesData[key]);
        //     this.notesData[key] = data;
        
        // });
        console.log(this.notes);
        

    }


    update(noteDone) {
        localStorage.setItem('notes', JSON.stringify(notes));
        return notes;
    }
}