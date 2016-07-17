import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class Nav extends React.Component {

  render() {
    return (
    <ul className='nav nav-tabs'>
      <li role='presentation'>
        <Link to='/'>Search</Link>
      </li>
      <li role='presentation'>
        <Link to='/practice'>Practice</Link>
      </li>
      {  this.props.isFetching &&
         ( <li role='presentation'><a className='msg'>Loading...</a></li> ) }
    </ul>
    )
  }
}

export default connect((state) => {
  return {
    isFetching: state.isFetching
  }
})(Nav)
