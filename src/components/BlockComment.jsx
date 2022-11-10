import { useState } from "react";
import "../styles/blockComment.sass";
import EditBlock from "./EditBlock";
import CommentScore from "./CommentScore";
import ReplyBlock from "./ReplyBlock";
import ReplyBtn from "./buttons/ReplyBtn";

export default function BlockComment({ comment }) {
  const [replyStatus, setReplyStatus] = useState(false);
  const [repliesArr, setRepliesArr] = useState(comment.replies);
  const replyesBlock = repliesArr.map((reply) => (
    <EditBlock reply={reply} key={reply.id} />
  ));

  console.log("comment.user.image.jpg:", comment.user.image.jpg);
  return (
    <div className="block-comment-main">
      <div className="block-comment">
        <div className="block-comment-score">
          <div className="block-comment-score-button">
            <CommentScore score={comment.score} />
          </div>
        </div>

        <div className="block-comment-user">
          <img
            src={require(`../images/${comment.user.image.jpg}`)}
            className="block-comment-img"
          />
          {comment.createdAt},{comment.user.username}
        </div>

        <ReplyBtn setReplyStatus={setReplyStatus} replyStatus={replyStatus} />

        <p className="block-comment-content">{comment.content}</p>
      </div>
      <div className="block-comment-reply-block">{replyesBlock}</div>

      {replyStatus ? (
        <ReplyBlock
          reply={comment}
          setRepliesArr={setRepliesArr}
          repliesArr={repliesArr}
          setReplyStatus={setReplyStatus}
        />
      ) : null}
    </div>
  );
}
