const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the '×' character
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save the new list to localStorage
}

// Add task when pressing the "Enter" key
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the current state to the browser's local storage
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Function to show the tasks from local storage when the page is loaded
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("todoData");
}

showTasks(); // Display the data when the app starts