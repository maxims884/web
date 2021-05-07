
const initialState = []
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    case 'EDIT_TODO':
      return state.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id
      )
    case 'COMPLETE_TODO':
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      console.log('Its cliked !!!')
      )

    case 'CLEAR_TODO':
      return []

    default:
      return state
  }
}
