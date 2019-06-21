// const importanceContainer = document.querySelector('.js-importance-listener');

// const importanceInputs = importanceContainer.querySelectorAll("input[name='importance']");

// importanceContainer.addEventListener("click", () => {
//     checkedInput = event.target;
//     checkedInputValue = checkedInput.value;
//     console.log('test');

//     console.log(checkedInputValue);
//     removeHighlights(5);
//     loopImportance(checkedInputValue);
    
// });

// function loopImportance(iterations, selected) {

//     Array.from(importanceInputs).forEach((item, index) => {
//         importanceInputs[i].closest(".note-content-input-group").classList.toggle('highlited', i <= selected);

//     })
//     for (let i = 0; i < iterations; i++) {
//         importanceInputs[i].closest(".note-content-input-group").classList.add('highlited');
//         importanceInputs[i].closest(".note-content-input-group").classList.toggle('highlited', i <= selected);

//     }
// }

// function removeHighlights(iterations) {
//     for (let i = 0; i < iterations; i++) {
//         importanceInputs[i].closest(".note-content-input-group").classList.remove('highlited');
//     }
// }

export class importanceService {
    constructor() {
        this.importanceContainer = document.querySelector('.js-importance-listener');
        this.importanceInputs = this.importanceContainer.querySelectorAll("input[name='importance']");
        this.importance = document.getElementsByTagName('input:checked').value;

    }

    highlight(selected) {        
        Array.from(this.importanceInputs).forEach((item, index) => {
            item.closest(".note-content-input-group").classList.toggle('highlited', index < selected);
        });
    }
    
}