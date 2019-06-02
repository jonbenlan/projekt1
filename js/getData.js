//const testOutput = localStorage.getItem("data");
const testOutput = {...localStorage};
console.log(testOutput);

const listItemTemplate = document.getElementById("list-item").innerHTML;
const listItem = Handlebars.compile(listItemTemplate);

function renderItems () {
    document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
}

const render = renderItems();