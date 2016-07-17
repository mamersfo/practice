import React from 'react'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'

export class Nav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {section: 'exercises'}
    this.click = this.click.bind(this)
  }

  click(e,s) {
    this.setState({section: s})
  }

  render() {
    return (
    <ul className='nav nav-tabs'>
      <li className={(this.state.section === 'exercises') ? 'active' : ''}>
        <Link to='exercises' onClick={(e) => this.click(e, 'exercises')}>
          Exercises
        </Link>
      </li>
      <li className={(this.state.section === 'practice') ? 'active' : ''}>
        <Link to='practice' onClick={(e) => this.click(e, 'practice')}>
          Practice
        </Link>
      </li>
      {
         this.props.isFetching &&
          ( <li role='presentation'><a className='msg'>Loading...</a></li> )
      }
    </ul>
    )
  }
}

export default connect((state) => {
  return {
    isFetching: state.isFetching
  }
})(Nav)
