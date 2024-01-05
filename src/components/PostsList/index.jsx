import { posts } from '../../utils/posts'
import { PostsItem } from '../PostsItem';
import './style.scss'

export const PostsList = () => {
  return(
    <div className='PostsList'>
      {posts.map((post) => (
        <PostsItem post={post} key={post.id}/>
      ))}
    </div>
  );
}