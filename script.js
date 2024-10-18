const todoList = [];

// myFunction2();

function myFunction2() {
    let listedToDolist = "";

    // Generating the HTML
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const name = todo.name;
        const date = todo.date;
        const html = `
            <div>
                <p style="width: 50%;">${name}</p> 
                <p style="width: 30%;">${date}</p>
                <button class="deleteButton" onclick="deleteTodo(${i});">Delete</button>
            </div>
        `;
        listedToDolist += html;
    }

    console.log(listedToDolist);
    document.getElementById("listed-items").innerHTML = listedToDolist;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    myFunction2();
}

function myFunction1() {
    let inputElement = document.querySelector(".To-DoClass");
    const name = inputElement.value;

    let inputDate = document.querySelector('.todoDate');
    const date = inputDate.value;

    todoList.push({ name, date });

    inputDate.value = "";
    inputElement.value = "";
    myFunction2();
}

