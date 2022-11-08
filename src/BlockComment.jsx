import { useState } from "react";
import "./styles/blockComment.sass";
import EditBlock from "./EditBlock";
import CommentScore from "./CommentScore";
import ReplyBlock from "./ReplyBlock";

export default function BlockComment({ comment }) {
  const [replyStatus, setReplyStatus] = useState(false);
  const [repliesArr, setRepliesArr] = useState(comment.replies);
  const replyesBlock = repliesArr.map((reply) => (
    <EditBlock reply={reply} key={reply.id} />
  ));

  console.log("repliesArr:", repliesArr);
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
          <div onClick={() => setReplyStatus(!replyStatus)}>Reply</div>
        </div>
        {comment.content}
      </div>
      <div className="block-comment-reply">{replyesBlock}</div>

      {replyStatus ? (
        <ReplyBlock
          reply={comment}
          setRepliesArr={setRepliesArr}
          repliesArr={repliesArr}
        />
      ) : null}
    </div>
  );
}
