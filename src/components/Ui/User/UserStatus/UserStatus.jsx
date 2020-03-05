import React, { Component } from 'react'
import cls from './UserStatus.module.sass'

class UserStatus extends Component {

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

  onStatusChange = (e) => {
    this.setState({status : e.target.value})
  }

  render() {
    if (this.props.isEditable) {
      return (
        <div>
          {!this.state.editMode && (
            <p className={cls.userStatus} onDoubleClick={this.activateEditMode}>
              {this.props.status ? this.props.status : 'Я ещё не придумал 🙄'}
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
        <p className={cls.userStatus}>
          {this.props.status ? this.props.status : 'Я ещё не придумал 🙄'}
        </p>
      )
    }
  }
}

export default UserStatus
