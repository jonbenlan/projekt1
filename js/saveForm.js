let testData;

testData = document.getElementById("title");

function saveData() {
    localStorage.setItem("title", testData.value)
}