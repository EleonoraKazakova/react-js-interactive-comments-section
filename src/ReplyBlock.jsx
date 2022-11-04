import { useState } from "react";
import ReplyContent from "./ReplyContent";

export default function ReplyBlock({ reply }) {
  const [edit, setEdit] = useState(false);
  function editContent(event) {
    event.preventDefault();
    setEdit(!edit);
  }

  return (
    <div className="block-comment-reply-item" key={reply.id}>
      {reply.score}, {reply.createdAt}
      <ReplyContent content={reply.content} edit={edit} />
      <div onClick={(event) => editContent(event)}>
        {edit ? "Submit" : "Edit"}
      </div>
    </div>
  );
}
