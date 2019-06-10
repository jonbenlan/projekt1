// const testOutput = {...localStorage};

// Object.keys(testOutput).forEach( (key) => {
//     const data = JSON.parse(testOutput[key]);
//     testOutput[key] = data;

// });


// function renderItems () {
//     document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
// }

// const render = renderItems();

class GetNotesData {
    constructor() {
        this.notesData = localStorage;
    }
    
    getAll() {
        Object.keys(this.notesData).forEach( (key) => {
            const data = JSON.parse(this.notesData[key]);
            this.notesData[key] = data;
        
        });

        return this.notesData;

    }


    update(noteDone) {
        // localStorage.setItem('foodStorage_v1', JSON.stringify(food));
        // return food;
    }
}