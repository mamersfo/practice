import React from 'react'
import { connect } from 'react-redux'

export class Add extends React.Component {
  addExercise(e) {
    e.preventDefault()
    const newName = this.refs.exerciseTitle.value
    if (newName) {
      this.props.dispatch({
        name: newName,
        type: 'ADD_EXERCISE'
      })

      this.refs.exerciseTitle.value = ''
    }
  }
  
  render() {
    return (
        <div className="add-exercise">
          <input type="text" placeholder="Exercise" ref="exerciseTitle" />
          <button onClick={(e) => this.addExercise(e) }>Add</button>
        </div>
    )
  }
}

export default connect()(Add)
