const testOutput = {...localStorage};

Object.keys(testOutput).forEach( (key) => {
    const data = JSON.parse(testOutput[key]);
    testOutput[key] = data;

});


function renderItems () {
    document.querySelector('.list-container-items').innerHTML = listItem(testOutput);
}

const render = renderItems();