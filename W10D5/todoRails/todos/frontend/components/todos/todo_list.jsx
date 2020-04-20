import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render () {
    return (
      <div> 
          <h3>
              {/* {props.todos} */}
              Todo List goes here!
          </h3>
          <ul>
              {this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
          </ul>
          <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    )
  }

}
export default TodoList;