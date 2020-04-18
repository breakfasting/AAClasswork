const allTodos = (state) => {
  let newArr = Object.keys(state.todos).map(key => state.todos[key])
  // let newArr = Object.values(state.todos)
  return newArr;
}

export default allTodos;