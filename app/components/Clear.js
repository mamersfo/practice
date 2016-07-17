import React from 'react'
import { connect } from 'react-redux'

export class Clear extends React.Component {
  clearExercises() {
    this.props.dispatch({ type: 'CLEAR_EXERCISES' })
  }

  render() {
    return (
        <button onClick={() => this.clearExercises()}>Clear</button>
    )
  }
}

export default connect()(Clear)
