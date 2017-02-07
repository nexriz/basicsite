export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text: text
	}
}
export function removeTodo(text, date) {
	return {
		type: 'REMOVE_TODO',
		text,
		date
	}
}