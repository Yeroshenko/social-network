import profileReducer, { addPost, deletePost } from './profile-reducer'

const state = {
  posts: [
    { id: 1, message: 'Hi, hoe are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 10 },
    { id: 3, message: 'Hello world', likesCount: 228 },
    { id: 3, message: 'Test', likesCount: 22 }
  ]
}

test('length of posts should be incremented', () => {
  
  const action = addPost('My first test')

  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
})

test('message of new post should be correct', () => {
  
  const action = addPost('My first test')

  const newState = profileReducer(state, action)

  expect(newState.posts[4].message).toBe('My first test')
});

test('after deleting length of posts should be decrement', () => {
  
  const action = deletePost(1)

  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})

test('after deleting length of posts should be corected if id is incorected', () => {
  
  const action = deletePost(1000)

  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
})
