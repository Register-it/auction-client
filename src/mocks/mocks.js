import { GET_POSTS } from "../components/Home/Home"
import { GET_POST_QUERY } from "../components/Post/Post"
import posts from "./posts"
import mockPost from "./post"

const getPostsMock = {
  request: {
    query: GET_POSTS
  },
  result: {
    data: {
      getPosts: posts
    }
  }
}

const getPostMocks = posts.map((post) => ({
  request: {
    query: GET_POST_QUERY,
    variables: { postId: post.id }
  },
  result: {
    data: {
      getPost: mockPost
    }
  }
}))
const mocks = [getPostsMock, ...getPostMocks]

export default mocks
