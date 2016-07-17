import React from 'react'
import { connect } from 'react-redux';

export class Search extends React.Component {

  render() {
    return (
        <div>
          <h2>Search</h2>
        </div>
    )
  }
}

export default connect()(Search)
