import React from 'react'
import { create } from 'react-test-renderer'
import UserStatusClass from './UserStatusClass'

describe('User status component', () => {
  test('status from props should be in the state', () => {
    const component = create(<UserStatusClass status='test status' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('test status')
  })

  test('after creation <p> should be displayed ', () => {
    const component = create(<UserStatusClass status='test status' />)
    const instance = component.root
    const paragraph = instance.findByType('p')
    expect(paragraph).not.toBeNull()
  })

  test('after creation <input> should not be displayed ', () => {
    const component = create(<UserStatusClass status='test status' />)
    const instance = component.root
    expect(() => {
      const input = instance.findByType('input')
    }).toThrow()
  })

  test('after creation <p> should contains with correct status', () => {
    const component = create(<UserStatusClass status='test status' />)
    const instance = component.root
    const paragraph = instance.findByType('p')
    expect(paragraph.children[0]).toBe('test status')
  })

   
})
