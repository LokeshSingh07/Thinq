import './style.css'


interface Todo{
  title: string,
  isCompleted: boolean,
  readonly id: string
};

const todos: Todo[] = [];

const todosContainer = document.querySelector(".todoContainer") as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myform") as HTMLFormElement;





myForm.onsubmit = (e)=>{
  e.preventDefault();

  const todo:Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: (Math.random()*1000).toString(),
  };

  todos.push(todo);
  todoInput.value = "";
  console.log(todos);

  // display todo on screen
  renderTodo(todos);
}




const renderTodo = (todos: Todo[])=>{
  todosContainer.innerText = "";

  todos.forEach((item)=> {
    generateTodoItem(item.title, item.isCompleted, item.id);
  })
}



const generateTodoItem = (title: string, isCompleted:boolean, id:string)=>{
  const todo:HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // creating a checkbox
  const checkBox:HTMLInputElement =  document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () =>{
    todos.find(item => {item.id == id ? item.isCompleted = checkBox.checked : ""});
    paragraph.className = checkBox.checked ? "textCut": "";
  }


  // creating p for title
  const paragraph:HTMLParagraphElement =  document.createElement("p");
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut": "";

  // creating delete button
  const btn:HTMLButtonElement = document.createElement("button");
  btn.innerText = "X";
  btn.className = "deleteBtn"
  btn.onclick= ()=>{
    deleteTodo(id);
  }


  // appending all to todo item
  todo.append(checkBox, paragraph, btn);
  console.log(todo);
  todosContainer.append(todo);
}




const deleteTodo = (id: string)=>{
  const idx = todos.findIndex(item => item.id == id);
  todos.splice(idx, 1);
  renderTodo(todos);
}


