import React, {Component} from 'react'
import {connect} from 'react-redux'
import WrappedRegistrationForm from './common/RegisterForm'

import {registerRequest} from './../actions'
import PropTypes from 'prop-types'

class Register extends Component {
  constructor (props) {
    super(props)

    this._register = this._register.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, currentlySending, error} = this.props.data

    return (
      <div className='form-Reg__wrapper'>
        <div className='form-Reg__form-wrapper'>
          <div className='form-Reg__form-header'>
            <h2 className='form-Reg__form-heading'>Register</h2>
          </div>
          <WrappedRegistrationForm data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register} btnText={'Register'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({username, password}))
  }
}

Register.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Register)
