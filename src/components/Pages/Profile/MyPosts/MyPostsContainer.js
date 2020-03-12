import { connect } from 'react-redux'

import { addPost, deletePost } from '../../../../redux/profile-reducer'

import MyPosts from './MyPosts'

const mapStateToProps = state => {
  return {
    autor: state.auth.login,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

export default connect(mapStateToProps, { addPost, deletePost })(MyPosts)
