const data = [
    {
    "name": "foo1",
    "value": "bar1",
    },
    {
    "name": "foo2",
    "value": "bar2",
    },
    {
    "name": "foo3",
    "value": "bar3",
    },
];
const dataContainer = document.getElementById("data-container");
const editForm = document.getElementById("edit-form");
//Output the data
function renderData() {
    dataContainer.innerHTML = "";
    data.forEach((item, index) => {
        const dataItem = document.createElement("div");
        dataItem.textContent = `Name: ${item.name}, Value: ${item.value}`;
    dataItem.addEventListener("click", () => showEditForm(index));
    dataContainer.appendChild(dataItem);
    });
}
// Show edit form
function showEditForm(index) {
    const selectedData = data[index];
    editForm.innerHTML = `
    <label for="edit-value">Value:</label>
    <input type="text" id="edit-value" value="${selectedData.value}">
    <button onclick="saveChanges(${index})">Save</button>
    `;
    editForm.style.display = "block";
}
// Save changes
function saveChanges(index) {
    const editedValue = document.getElementById("edit-value").value;
    data[index].value = editedValue;
    editForm.style.display = "none";
    renderData();
}
// Main function
function init() {
    renderData();
}
init();