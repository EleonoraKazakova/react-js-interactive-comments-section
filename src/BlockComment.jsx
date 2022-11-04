import "./styles/blockComment.sass";
import ReplyBlock from "./ReplyBlock";
import CommentScore from "./CommentScore";

export default function BlockComment({ comment }) {
  const replyesBlock = comment.replies.map((reply) => (
    <ReplyBlock reply={reply} key={reply.id} />
  ));

  return (
    <div className="block-comment-main">
      <div className="block-comment">
        <div className="block-comment-score">
          <div className="block-comment-score-button">
            <CommentScore score={comment.score} />{" "}
          </div>
        </div>
        <div>
          {comment.createdAt},{comment.user.username}
        </div>
        {comment.content}
      </div>
      <div className="block-comment-reply">{replyesBlock}</div>
    </div>
  );
}
