const testOutput = {...localStorage};
// console.log(Object.keys(testOutput));
console.log(testOutput);

const dataArray = [ ]; 
Object.keys(testOutput).forEach( (key) => {
    const data = JSON.parse(testOutput[key]);
    testOutput[key] = data;

});

console.log(testOutput);
// const testOutput = JSON.stringify(localStorage);

const listItemTemplate = document.getElementById("list-item").innerHTML;
const listItem = Handlebars.compile(listItemTemplate);

function renderItems () {
    document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
}

const render = renderItems();