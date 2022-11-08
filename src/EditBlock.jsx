import { useState } from "react";
import EditContent from "./EditContent";
import ReplyBlock from "./ReplyBlock";

export default function EditBlock({ reply }) {
  const [edit, setEdit] = useState(false);
  function editContent(event) {
    event.preventDefault();
    setEdit(!edit);
  }

  return (
    <div className="block-comment-reply-item" key={reply.id}>
      {reply.score} {reply.createdAt}
      <EditContent content={reply.content} edit={edit} />
      {/*<ReplyBlock reply={reply} />*/}
      <div onClick={(event) => editContent(event)}>
        {edit ? "Submit" : "Edit"}
      </div>
    </div>
  );
}
