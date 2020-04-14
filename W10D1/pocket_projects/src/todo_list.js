let todos = JSON.parse(localStorage.getItem("todos")) || [];
// let todos = [{value: 'thing', done: true}];
let ul = document.querySelector(".todos");
let form = document.querySelector(".add-todo-form");
populateList(todos);

const addTodo = (e) => {
  e.preventDefault();
  let input = document.querySelector("input[name='add-todo']");
  let todo = { 'value': input.value, 'done': false};
  todos.push(todo);
  input.value = '';
  populateList(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
};

function populateList(todos) {
  ul.innerHTML = '';
  todos.forEach((todo, i) => {
    let label = document.createElement('label');
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add('box');
    checkbox.dataset.done = todo.done;
    checkbox.dataset.index = i;
    if (todo.done){
        checkbox.checked = 'true';
    }
    label.innerText = todo.value;
    li.appendChild(label);
    li.appendChild(checkbox);
    ul.appendChild(li);
  });
}

function toggleDone(e) {
  e.preventDefault();
  let currentTarget = e.currentTarget;
  let target = e.target;
  
  if (target.dataset.done === 'true') {
    //target.dataset.done = 'false';
    todos[target.dataset.index].done = false;
    //target.checked = false;
  } else if (target.dataset.done === 'false') {
    //target.dataset.done = 'true';
    todos[target.dataset.index].done = true;
    //target.checked = true;
  }
    

  populateList(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener('submit', addTodo);
// ul.addEventListener('click', toggleDone);
let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(box => {
  box.addEventListener('click', toggleDone);
});


// {value: 'do something', done: false}