const importanceContainer = document.querySelector('.js-importance-listener');

const importanceInputs = importanceContainer.querySelectorAll("input[name='importance']");

importanceContainer.addEventListener("click", () => {
    checkedInput = event.target;
    checkedInputValue = checkedInput.value;
    console.log('test');
    //let highlightTarget = importanceInputs[i].closest(".note-content-input-group");
    console.log(checkedInputValue);
    removeHighlights(5);
    loopImportance(checkedInputValue);
    //let loop = new importanceLoop(highlightTarget);
    //loop.loop(5, remove);
    //loop.loop(checkedInputValue, add);
});

function loopImportance(iterations, selected) {

    Array.from(importanceInputs).forEach((item, index) => {
        importanceInputs[i].closest(".note-content-input-group").classList.toggle('highlited', i <= selected);

    })
    for (let i = 0; i < iterations; i++) {
        importanceInputs[i].closest(".note-content-input-group").classList.add('highlited');
        importanceInputs[i].closest(".note-content-input-group").classList.toggle('highlited', i <= selected);

    }
}

function removeHighlights(iterations) {
    for (let i = 0; i < iterations; i++) {
        importanceInputs[i].closest(".note-content-input-group").classList.remove('highlited');
    }
}

/*class importanceLoop {
    constructor (highlightTarget) {
        this.highlightTarget = loopTarget;
    }
    
    loop(iterations, action) {
        for (let i = 0; i < iterations; i++) {
            loopTarget.classList.action('highlited');
        }
    }
}

*/