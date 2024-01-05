import { users } from "../../utils/users";
import { CommentList } from "../CommentList";
import './style.scss'


export const PostsItem = ({ post }) => {
  const { username, email, name } = users.find((user) => user.id === post.userId) || {};

  return (
    <div className="PostsItem">
    <span className="PostsItem__username" title={name}>{username} || </span>
    <a href={email} className="PostsItem__email">{email}</a>
    <br />
    <span className="PostsItem__title">{post.title}</span>
    <br />
    <span className="PostsItem__text">{post.body}</span>
    <br />
    <CommentList post={post} />
  </div>
  );
} 