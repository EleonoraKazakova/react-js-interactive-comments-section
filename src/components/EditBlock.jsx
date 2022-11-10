import { useState } from "react";
import EditContent from "./EditContent";
import ReplyBlock from "./ReplyBlock";
import "../styles/blockComment.sass";

export default function EditBlock({ reply }) {
  const [edit, setEdit] = useState(false);
  function editContent(event) {
    event.preventDefault();
    setEdit(!edit);
  }

  console.log("reply:", reply);
  return (
    <div className="block-comment-reply-item" key={reply.id}>
      {reply.score}
      <img
        src={require(`../images/${reply.user.image.jpg}`)}
        className="block-comment-img"
      />
      {reply.createdAt} {reply.username}
      <EditContent content={reply.content} edit={edit} />
      <div onClick={(event) => editContent(event)}>
        {edit ? "Submit" : "Edit"}
      </div>
    </div>
  );
}
