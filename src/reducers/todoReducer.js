import Immutable from 'immutable';

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHANGE_TEXT = "CHANGE_TEXT";


const initialState = {
	todoList: [],
	text: ''
}


function addTodoReducer(state={}, action) {
	return action.type === ADD_TODO ? { text: action.text, date: new Date().getTime() } : state;
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
			return {
				todoList: [...state.todoList, addTodoReducer(state.todoList, action) ],
				}
		}
		case REMOVE_TODO: {
			return {
				todoList: [ ...Immutable.List(state.todoList).filter(item=>item.date !== action.date).toJS() ],
				 //state.todoList.filter(item => item.text !== action.text)
			}
		}
	}
	return state;
}







