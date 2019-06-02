const importanceContainer = document.querySelector('.js-importance-listener');

const importanceInputs = importanceContainer.querySelectorAll("input[name='importance']");

importanceContainer.addEventListener("click", () => {
    checkedInput = event.target;
    checkedInputValue = checkedInput.value;
    console.log(checkedInputValue);
    removeHighlights(5);
    loopImportance(checkedInputValue);
});

function loopImportance(iterations) {
    for (let i = 0; i < iterations; i++) {
        importanceInputs[i].closest(".note-content-input-group").classList.add('highlited');
    }
}

function removeHighlights(iterations) {
    for (let i = 0; i < iterations; i++) {
        importanceInputs[i].closest(".note-content-input-group").classList.remove('highlited');
    }
}