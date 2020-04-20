export const thunk = ({ dispatch, getState }) => next => action => {
  if (action instanceof Function) {
    return action(dispatch, getState)
  } else {
    return next(action)
  }
};