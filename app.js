const todoList = [
	"Make a coffee",
	"Start working on FE exercises",
	"Start TODO application",
	"Finish TODO application",
	"Finish the FE exercises",
	"Get the job"];

const addForm = document.querySelector('.add');
const listGroup = document.querySelector(".list-group");
const listItem = document.querySelector('.todos');
const search = document.querySelector('.search input');

generateTemplate = (todo, selector) => {
	const html = `<li class="list-group-item todos">
							<span>${todo}</span>
							<span class="delete">&#10005;</span>
						</li>
						`;
	selector.innerHTML += html;
};

window.addEventListener('load', () => {
	todoList.map(itm => {
		generateTemplate(itm, listGroup);
	})
});

addForm.addEventListener('submit', e => {
	e.preventDefault();
	const todo = addForm.add.value.trim();

	if (todo.length) {
		generateTemplate(todo, listItem);
		addForm.reset();
	}
});

// delete todo

listItem.addEventListener('click', e => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// filter method

const filterTodos = (term) => {
	Array.from(listItem.children)
		.filter( todo => !todo.textContent.toLowerCase().includes(term) )
		.forEach( todo => todo.classList.add('filtered'));
	Array.from(listItem.children)
		.filter( todo => todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
	const  term = search.value.trim().toLowerCase();
	filterTodos(term);
})