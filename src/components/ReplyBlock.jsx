import { useState } from "react";
import data from "../data.json";
import "../styles/reply-block.sass";
import SubmitBtn from "./buttons/SubmitBtn";
import Textarea from "./elements/Textarea";

export default function ReplyBlock({
  setRepliesArr,
  repliesArr,
  setReplyStatus,
}) {
  const [replyCurrent, setReplyCurrent] = useState("");
  const currentUser = data.currentUser;

  function createComment() {
    setRepliesArr([
      ...repliesArr,
      {
        id: repliesArr.length,
        username: currentUser.username,
        content: replyCurrent,
        user: { image: { jpg: currentUser.image.jpg } },
        score: 0,
        createdAt: new Date(),
        replies: [],
      },
    ]);
    setReplyStatus(false);
  }

  return (
    <div className="reply-block">
      <div>
        <img
          src={require(`../images/${currentUser.image.jpg}`)}
          className="reply-block-img"
        />
      </div>

      <Textarea setReplyCurrent={setReplyCurrent}></Textarea>

      <SubmitBtn
        createComment={createComment}
        setRepliesArr={setRepliesArr}
      />
    </div>
  );
}
