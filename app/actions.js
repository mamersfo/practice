import { fetchExercises } from './api';

export function fetchExercisesAction() {
  return (dispatch) => {
    dispatch({ type: 'REQUEST_EXERCISES_INIT' })

    fetchExercises().then((data) => {
      dispatch({
        type: 'REQUEST_EXERCISES_SUCCESS',
        exercises: data.exercises
      })
    })
  }
}
