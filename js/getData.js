const testOutput = {...localStorage};
// console.log(Object.keys(testOutput));

Object.keys(testOutput).forEach( (key) => {
    const data = JSON.parse(testOutput[key]);
    console.log(data);

});
// const testOutput = JSON.stringify(localStorage);

const listItemTemplate = document.getElementById("list-item").innerHTML;
const listItem = Handlebars.compile(listItemTemplate);

function renderItems () {
    document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
}

const render = renderItems();