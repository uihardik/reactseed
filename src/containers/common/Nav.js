import React, {Component} from 'react'
import LoadingButton from './LoadingButton'
import { Button} from 'antd';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import {logout, menuStatus, clearError} from './../../actions'

class Nav extends Component {
  state = {
   size: 'default',
   collapsed: true,
 };
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.props.dispatch(menuStatus(this.state.collapsed))
  }

  render () {
     const size = this.state.size;
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link to='/dashboard' className='btn btn--dash btn--nav'>Dashboard</Link>
        <Link to='/profile' className='btn btn--dash btn--nav'>Profile</Link>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <Button onClick={this._logout} className='btn btn--login btn--nav' type="primary" icon="logout" size={size} > Logout </Button>
        )}
      </div>
    ) : (
      <div>
        <Link to='/register' className='btn btn--login btn--nav' onClick={this._clearError}>Register</Link>
        <Link to='/login' className='btn btn--login btn--nav' onClick={this._logout}>Login</Link>
      </div>
    )

    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>
            <h1 className='nav__logo'>Login&nbsp;Flow</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: PropTypes.bool,
  currentlySending: PropTypes.bool,
  dispatch: PropTypes.func
}

export default Nav;
