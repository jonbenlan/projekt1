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
        this.notesData = {...localStorage};
    }
    
    getAll() {

        this notes = Object.keys(this.notesData).forEach( (key) => {
            const data = JSON.parse(this.notesData[key]);
            this.notesData[key] = data;
        
        });
        console.log(this.notes);
        

    }


    update(noteDone) {
        // localStorage.setItem('foodStorage_v1', JSON.stringify(food));
        // return food;
    }
}