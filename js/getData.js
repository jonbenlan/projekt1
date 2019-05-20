
function getData() {
    let testOutput = localStorage.getItem("title");
    let target = document.getElementsByClassName("list-container-item-title")[0];
    writeData(testOutput, target);
}

function writeData(testOutput, target) {
    target.innerText = testOutput;
}
