function addTodo(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const todofield = document.getElementById('todofield');
    const todolist = document.getElementById('todolist');
    todolist.innerHTML += `
        <li>
            ${todofield.value}
            <input type="checkbox">
        </li>
    `;
    console.log(todofield.value);
    todofield.value = '';
}