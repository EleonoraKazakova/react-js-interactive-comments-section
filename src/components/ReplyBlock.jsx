import { useState } from "react";
import data from "../data.json";
import "../styles/reply-block.sass";
import SubmitBtn from "./buttons/SubmitBtn";

export default function ReplyBlock({
  reply,
  setRepliesArr,
  repliesArr,
  setReplyStatus,
}) {
  const replyArr = reply.replies; //[]
  const [updatedReply, setUpdatedReply] = useState(replyArr);
  const [replyCurrent, setReplyCurrent] = useState("");
  const [id, setId] = useState(0);

  const currentUser = data.currentUser;
  console.log("reply1:", reply);
  console.log("replyCurrent:", replyCurrent);

  function createComment() {
    setId(replyArr.length);
    setRepliesArr([
      ...repliesArr,
      {
        id: id,
        username: currentUser.username,
        content: replyCurrent,
        user: { image: { jpg: currentUser.image.jpg } },
        score: 0,
        replies: [],
      },
    ]);
    setReplyStatus(false);
  }

  console.log("updatedReply:", updatedReply);
  return (
    <div className="reply-block">
      <div>
        <img
          src={require(`../images/${currentUser.image.jpg}`)}
          className="reply-block-img"
        />
      </div>
      <textarea
        className="textarea"
        role="textbox"
        contentEditable=""
        onChange={(event) => setReplyCurrent(event.target.value)}
      ></textarea>

      <SubmitBtn
        createComment={createComment}
        setRepliesArr={setRepliesArr}
        updatedReply={updatedReply}
      />
    </div>
  );
}
