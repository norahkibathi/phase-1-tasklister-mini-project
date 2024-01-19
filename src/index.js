document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== "") {
      const newTask = document.createElement("li");
      newTask.innerText = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "x";
      deleteButton.addEventListener("click", function() {
        newTask.remove();
      });

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task description!");
    }
  });

  //  the code allows deleting of tasks
  taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  });
});
