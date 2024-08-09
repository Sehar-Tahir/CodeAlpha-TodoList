const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    if (document.getElementById("task-input").value !== "") {
        const taskText = document.getElementById("task-input").value;
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText}
                                <button class="delete-btn">Delete</button>`;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const listItem = e.target.parentElement;
        taskList.removeChild(listItem);
    }
})