const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

//function to add a new todo
function addTodo() {
  const task = input.value.trim();
  if (task === "") return;

  //create a list item
  const li = document.createElement("li");
  li.textContent = task;

  //toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = "";
}

//add event listeners
addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});
