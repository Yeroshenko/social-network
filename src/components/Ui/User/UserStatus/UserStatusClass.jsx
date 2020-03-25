import React, { PureComponent } from 'react'

import cls from './UserStatus.module.sass'

class UserStatusClass extends PureComponent {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = e => {
    this.setState({ status: e.target.value })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    if (this.props.isEditable) {
      return (
        <div className={cls.userStatus}>
          {!this.state.editMode && (
            <p
              className={cls.userStatusText}
              onClick={this.activateEditMode}
            >
              {this.props.status || 'Я ещё не придумал 🙄'}
            </p>
          )}
          {this.state.editMode && (
            <input
              autoFocus
              type='text'
              value={this.state.status}
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
            />
          )}
        </div>
      )
    } else {
      return (
        <p className={cls.userStatusText}>
          {this.props.status ? this.props.status : 'Я ещё не придумал 🙄'}
        </p>
      )
    }
  }
}

export default UserStatusClass
