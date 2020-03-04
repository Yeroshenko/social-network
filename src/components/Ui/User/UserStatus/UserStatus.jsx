import React, { Component } from 'react'
import cls from './UserStatus.module.sass'

class UserStatus extends Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
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
              type='text'
              value={this.props.status}
              onBlur={this.deactivateEditMode}
              autoFocus
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
