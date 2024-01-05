import './style.scss'

export const CommentItem = ({ comment }) => {
  return (
    <div className="CommentItem">
      <span className="CommentItem__name">{comment.name} || </span>
      <a href={comment.email} className="CommentItem__email">{comment.email}</a>
      <br />
      <span className="CommentItem__body">{comment.body}</span>
    </div>
  );
}