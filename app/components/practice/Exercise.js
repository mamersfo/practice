import React from 'react';
import { connect } from 'react-redux';

export class Exercise extends React.Component {

  toggleDone() {
    this.props.dispatch({
      type: 'TOGGLE_EXERCISE',
      id: this.props.exercise.id
    })
  }

  deleteExercise(e) {
    this.props.dispatch({
      type: 'DELETE_EXERCISE',
      id: this.props.exercise.id
    })
  }

  render() {
    const className = this.props.exercise.done ? 'done-exercise' : '';

    return (
        <div className={`exercise ${className} exercise-${this.props.exercise.id}`}>
        <p className="toggle-exercise" onClick={() => this.toggleDone() }>{ this.props.exercise.name }</p>
        <a className="delete-exercise" href="#" onClick={(e) => this.deleteExercise(e) }>Delete</a>
        </div>
    )
  }
}

export default connect()(Exercise)
