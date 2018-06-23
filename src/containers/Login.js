import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'
import Facebookbtn from './common/facebookbtn'
import { loginRequestApi} from './../actions'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor (props) {
    super(props)

    this._login = this._login.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const {formState, currentlySending, error, loggedIn} = this.props.data

    if (loggedIn) {
      return (
        <Redirect to={'/'} />
      )
    }

    return (
      <div className='form-login__wrapper'>
        <div className='form-login__form-wrapper'>
          <div className='form-login__form-header'>
            <h2 className='form-login__form-heading'>Login</h2>
          </div>
          <Form data={formState} dispatch={dispatch} onSubmit={this._login} btnText={'Login'} error={error} currentlySending={currentlySending} />
          <p><span className="btn-round">or</span></p>
          <div className='social_Btn'>
            <Facebookbtn/>
          </div>
        </div>
      </div>
    )
  }

  async _login (username, password) {
    await this.props.dispatch(loginRequestApi({username, password},(res) => {
    }
    ));
  }
}

Login.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func
}

// Which props do we want to inject, given the global state?
function select (state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login)
