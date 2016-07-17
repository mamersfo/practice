import React from 'react'
import Exercise from './Exercise';
import Clear from './Clear';
import Add from './Add';
import { connect } from 'react-redux';
import { fetchExercisesAction } from './actions';

export class Practice extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchExercisesAction());
  }

  renderExercises() {
    return this.props.exercises.map((exercise) => {
      return (
          <li key={exercise.id}>
            <Exercise exercise={exercise} />
          </li>
      )
    })
  }

  render() {
    return (
        <div>
          { this.props.isFetching && <p>LOADING...</p> }
          <Clear />
          <h2>Exercises</h2>
          <ul className="exercises-list">
            { this.renderExercises() }
          </ul>
          <Add />
        </div>
    )
  }
}

export default connect((state) => {
  return {
    exercises: state.exercises,
    isFetching: state.isFetching
  }
})(Practice)
