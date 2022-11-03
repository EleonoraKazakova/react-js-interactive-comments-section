import "./styles/blockComment.sass";
import { useState } from "react";

export default function BlockComment({ comment }) {
  console.log("comment:", comment);

  const [edit, setEdit] = useState(false);
  function editContent() {}

  const replyesBlock = comment.replies.map((reply) => (
    <div className="block-comment-reply-item">
      {reply.score}, {reply.createdAt}
      {edit ? <textarea>{reply.content}</textarea> : <div>{reply.content}</div>}
      <div onClick={() => setEdit(!edit)}>{edit ? "Submit" : "Edit"}</div>
    </div>
  ));

  return (
    <div className="block-comment-main">
      <div className="block-comment">
        <div className="block-comment-score">{comment.score}</div>
        <div>
          {comment.createdAt},{comment.user.username}
        </div>
        {comment.content}
      </div>
      <div className="block-comment-reply">{replyesBlock}</div>
    </div>
  );
}
