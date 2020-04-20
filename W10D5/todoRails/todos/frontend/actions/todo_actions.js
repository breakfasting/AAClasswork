export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO"
import * as APIUtil from '../util/todo_api_util'


export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS, 
        todos
    }
}

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
})

export const fetchTodos = () => dispatch => {
    APIUtil.fetchTodos().then(res => dispatch(receiveTodos(res)))
}