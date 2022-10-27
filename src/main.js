document.querySelector("#app").innerHTML = `
  <h1>What to-do?</h1>
  <ul id="todos"></ul>
  <input type="text" id="todo-input" data-testid="todo-input" placeholder="Type your to-do" />
  <button id="add-todo" type="button">Add to-do</button>
  <p id="hint">ℹ️ <b>Hint:</b> Click on an item to remove it from your list.</p>
`;

const todoInput = document.querySelector("#todo-input");

document.querySelector("#add-todo").addEventListener("click", () => {
  addTodo(todoInput);
});

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodo(todoInput);
  }
});

document.getElementById("todos").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.remove();
    removeTodo(e.target);
  }
});

// Fetch finnes ikke i Node JS 😔
// apiFetchTodos().then(
//   (data) =>
//     data &&
//     data.todoList.forEach((todo) => {
//       const ul = document.getElementById("todos");
//       const li = document.createElement("li");
//       li.setAttribute("id", todo.id);
//
//       li.appendChild(document.createTextNode(todo.text));
//       ul.appendChild(li);
//     })
// );

// Helpers

function addTodo(todoInput) {
  const todoText = todoInput.value;
  const todoId = Math.random().toString().substring(2);

  if (!todoText) {
    alert("Type a to-do first!");
  }

  if (todoText) {
    const ul = document.getElementById("todos");
    const li = document.createElement("li");
    li.setAttribute("id", todoId);

    li.appendChild(document.createTextNode(todoText));
    ul.appendChild(li);

    // Fetch finnes ikke i Node JS 😔
    // apiAddTodo({ text: todoText, id: todoId });

    document.getElementById("todo-input").value = ""; // Reset input field
    document.getElementById("todo-input").focus(); // Set focus on input field
  }
}

function removeTodo(todo) {
  console.log(todo.id);
}

async function apiFetchTodos() {
  const response = await fetch("/api/todolist");

  if (response.status !== 200) {
    const error = {
      status: response.status,
    };

    return Promise.reject(error);
  }

  return await response.json();
}

async function apiAddTodo(todo) {
  const response = await fetch("/api/add/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todo }),
  });

  if (response.status !== 200) {
    const error = {
      status: response.status,
    };

    return Promise.reject(error);
  }

  return await response.json();
}
