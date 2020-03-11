import React, { useState, useEffect } from 'react'

import cls from './UserStatus.module.sass'

const UserStatus = ({ isEditable, status, updateStatus }) => {
  const noStatus = 'Я ещё не придумал 🙄'

  const [editMode, setEditMode] = useState(false)
  const [newStatus, setNewStatus] = useState(status)

  useEffect(() => {
    setNewStatus(status)
  }, [status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(newStatus)
  }

  const onStatusChange = e => {
    setNewStatus(e.target.value)
  }

  if (!isEditable)
    return <p className={cls.userStatusText}>{status || noStatus}</p>

  return (
    <div className={cls.userStatus}>
      {!editMode && (
        <p className={cls.userStatusText} onDoubleClick={activateEditMode}>
          {status || noStatus}
        </p>
      )}
      {editMode && (
        <input
          autoFocus
          type='text'
          value={newStatus}
          onChange={onStatusChange}
          onBlur={deactivateEditMode}
        />
      )}
    </div>
  )
}

export default UserStatus
