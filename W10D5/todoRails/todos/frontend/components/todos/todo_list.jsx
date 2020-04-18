import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = (props) => {
  return (
    <div> 
        <h3>
            {/* {props.todos} */}
            Todo List goes here!
        </h3>
        <ul>
            {props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </ul>
        <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  )
}
export default TodoList;