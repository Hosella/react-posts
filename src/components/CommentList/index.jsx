import { comments } from '../../utils/comments'
import { CommentItem } from '../CommentItem';

export const CommentList = ({ post }) => {
  const newComments = comments.filter((comment) => comment.postId === post.id);

  return (
    <div>
      {newComments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </div>
  );
}