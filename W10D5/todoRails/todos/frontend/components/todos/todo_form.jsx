import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  updateTitle(event) {
    this.setState({
      title: event.currentTarget.value
    })
  }

  updateBody(event) {
    this.setState({
      body: event.currentTarget.value
    })
  }

  createTodo(){
      const todo = {
          title: this.state.title,
          body: this.state.body,
          id: new Date().getTime(),
          done: false
      }
      this.props.createTodo({todo});
      this.setState({
        title: '',
        body: '',
      })
  }

  render() {
    return (
      <div>
        <label>
          Title:
          <input type="text" onChange={this.updateTitle} value={this.state.title} />
        </label>
        <label>
          Body:
          <input type="text" onChange={this.updateBody} value={this.state.body} />
        </label>
        <button onClick={this.createTodo} >Add Todo!</button>
      </div>
    );
  }
}

export default TodoForm;