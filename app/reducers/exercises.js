function exercisesReducer(exercises = [], action) {

  switch (action.type) {
  case 'ADD_EXERCISE':
    const exercise = {
      name: action.name,
      id: exercises.length,
      done: false
    }
    return exercises.concat([exercise])

  case 'DELETE_EXERCISE':
    return exercises.filter((exercise) => exercise.id !== action.id)

  case 'CLEAR_EXERCISES':
    return []

  case 'TOGGLE_EXERCISE':
    return exercises.map((exercise) => {
      if (exercise.id === action.id) {
        return {
          name: exercise.name,
          id: exercise.id,
          done: !exercise.done
        }
      }
      return exercise
    })

  case 'REQUEST_EXERCISES_SUCCESS':
    return action.exercises

  default:
    return exercises
  }
}

export default exercisesReducer
