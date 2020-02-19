const store = {
  _state: {
    profilePage: {
      posts: [{
          id: 1,
          message: 'Hi, hoe are you?',
          likesCount: 12
        },
        {
          id: 2,
          message: "It's my first post",
          likesCount: 10
        },
        {
          id: 3,
          message: 'Hello world',
          likesCount: 228
        }
      ],
      profile: {
        id: 1,
        name: 'Valeriy Yeroshenko',
        site: 'yeroshenko.github.io',
      },
      newPostText: ''
    },
    dialogsPage: {
      messages: [{
          id: 1,
          message: 'Hi!'
        },
        {
          id: 2,
          message: 'Whats Upppp'
        },
        {
          id: 3,
          message: 'Yoooooooooo'
        }
      ],
      dialogs: [{
          id: 1,
          name: 'Name'
        },
        {
          id: 2,
          name: 'Namee'
        },
        {
          id: 3,
          name: 'Nameee'
        },
        {
          id: 4,
          name: 'Nameeee'
        },
        {
          id: 5,
          name: 'Nameeeee'
        },
        {
          id: 6,
          name: 'Nameeeeee'
        }
      ]
    },
    asidePage: {
      friends: [
        {
          id: 2,
          name: 'Name1 Surname1',
          site: 'website1.io',
        },
  
        {
          id: 3,
          name: 'Name2 Surname2',
          site: 'website2.io',
        },
  
        {
          id: 4,
          name: 'Name3 Surname3',
          site: 'website3.io',
        },
  
        {
          id: 5,
          name: 'Name4 Surname4',
          site: 'website4.io',
        },
  
        {
          id: 6,
          name: 'Name5 Surname5',
          site: 'website5.io',
        },
      ]
    }
  },

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('state changed')
  },

  addPost() {
    const newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer 
  } 
}

export default store
window.store = store