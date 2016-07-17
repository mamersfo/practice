import React from 'react'
import { connect } from 'react-redux';

export class Exercises extends React.Component {

  render() {
    return (
        <div>
          <h2>Exercises</h2>
        </div>
    )
  }
}

export default connect()(Exercises)
