function getTodos() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
	xhr.send();

	xhr.onload = () => {
   	const objectTodos = JSON.parse(xhr.response);

   	objectTodos.map((todo) => {
   		createTodo(todo.title);

   		if (todo.completed === true) {
   			console.log('true', todo.completed);	
   		} else {
   		}
   	});
	}
}

function createTodo(todoTitle) {
	const ulTodo = document.querySelector('.js-list-todo');
	const list = document.createElement('li');

	list.className = `list-group-item list-group-item-secondary   
	list-group-item-action d-flex justify-content-between rounded-pill`;
	list.textContent = todoTitle;
	
	ulTodo.prepend(list);
}

getTodos();