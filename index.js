let todoListContE1 = document.getElementById("todoListCont");
let userInE1 = document.getElementById("userIn");
let errormsg = document.getElementById("errormsg");

let todoList = [
    { title: "HTML", id: 1 },
    { title: "CSS", id: 2 },
    { title: "JavaScript", id: 3 },
];

function createAndAppendTodo(todo) {
    let checkBoid = "mycheckbox" + todo.id;

    let listCont = document.createElement("li");
    listCont.classList.add("list-cont");
    listCont.id = "todo-" + todo.id;  // Assign unique ID
    todoListContE1.appendChild(listCont);

    let checkboxE1 = document.createElement("input");
    checkboxE1.type = "checkbox";
    checkboxE1.id = checkBoid;
    listCont.appendChild(checkboxE1);

    let labelE1 = document.createElement("label");
    labelE1.classList.add("label-card");
    labelE1.htmlFor = checkBoid;
    listCont.appendChild(labelE1);

    let titleE1 = document.createElement("h4");
    titleE1.textContent = todo.title;
    labelE1.appendChild(titleE1);

    let deleteBtnE1 = document.createElement("button");
    deleteBtnE1.classList.add("delete-btn");
    labelE1.appendChild(deleteBtnE1);

    let trashIconE1 = document.createElement("i");
    trashIconE1.classList.add("fa-solid", "fa-trash");
    deleteBtnE1.appendChild(trashIconE1);

    deleteBtnE1.addEventListener("click", function () {
        onDeleteTodo(todo.id);
    });
}

function onDeleteTodo(todoId) {
    let listCont = document.getElementById("todo-" + todoId);
    if (listCont) {
        todoListContE1.removeChild(listCont);
        todoList = todoList.filter((todo) => todo.id !== todoId);
        console.log("Updated todoList:", todoList);
    }
}


for (let each of todoList) {
    createAndAppendTodo(each);
}

function onAddTodo() {
    let eachId = todoList.length + 1;

    let newTodo = {
        title: userInE1.value,
        id: eachId,
    };

    if (userInE1.value === "") {
        errormsg.textContent = "Please provide valid input!!!";
    } else {
        createAndAppendTodo(newTodo);
        todoList.push(newTodo);
        errormsg.textContent = "";
        userInE1.value = "";
    }
    console.log(todoList.length);
}
