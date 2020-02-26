import { connect } from 'react-redux'

import {
  addPost,
  updateNewPostText
} from '../../../../redux/profile-reducer'

import MyPosts from './MyPosts'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updateNewPostText: text => {
//       dispatch(updateNewPostTextAC(text))
//     },
//     addPost: () => {
//       dispatch(addPostAC())
//     }
//   }
// }

const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(MyPosts)

export default MyPostsContainer
