function getTodos() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
	xhr.send();

	xhr.onload = () => {
   	const todos = JSON.parse(xhr.response);

   	todos.map((todo) => {
   		createTodos(todo.title,todo.completed);	
   	});
	}
}

function createTodos(todoTitle,todoCompleted) {
	const ulTodo = document.querySelector('.js-list-todo');
	const list = document.createElement('li');
	list.className = `list-group-item list-group-item-action d-flex 
	justify-content-between rounded-pill`

	if (todoCompleted) {
		list.classList.add('list-group-item-success');
	} else {
		list.classList.add('list-group-item-warning');
	}

	list.textContent = todoTitle;
	ulTodo.prepend(list);
}

getTodos();