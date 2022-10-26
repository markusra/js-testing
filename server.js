import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

let todoList = {
  todoList: [],
};

let totalItemsCreated = 0;
let totalItemsDeleted = 0;

app.get("/todolist", function (req, res) {
  return res.send(todoList);
});

app.post("/add/todo", function (request, response) {
  let todo = request.body.todo;
  todoList.todoList.push(todo);

  totalItemsCreated++;
  response.send(todoList);
});

app.post("/delete/todo", function (request, response) {
  let id = request.body.id;

  todoList.todoList = todoList.todoList.filter(function (todo) {
    return todo.id !== id;
  });

  totalItemsDeleted++;
  response.send(todoList);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App is listening on port ${port}!`));
