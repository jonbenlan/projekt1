const importanceContainer = document.querySelector('.note-content-importance');

const importanceInputs = importanceContainer.querySelectorAll("label");

importanceContainer.addEventListener("click", () => {
    checkedInput = event.target;
    checkedInputValue = checkedInput.htmlFor;
    console.log(checkedInputValue);
    removeHighlights(5);
    loopImportance(checkedInputValue);
});

function loopImportance(iterations) {
    for (let i = 0; i < iterations; i++) {
        importanceInputs[i].classList.add('highlited');
    }
}

function removeHighlights(iterations) {
    for (let i = 0; i < iterations; i++) {
        importanceInputs[i].classList.remove('highlited');
    }
}