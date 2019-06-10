Handlebars.registerHelper('times', function(n, block) {
    let accum = '';
    for(let i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});


const listItemTemplate = document.getElementById("list-item").innerHTML;
const listItem = Handlebars.compile(listItemTemplate);
