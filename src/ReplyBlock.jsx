import { useState } from "react";
import data from "./data.json";

export default function ReplyBlock({ reply, setRepliesArr, repliesArr }) {
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
      { id: id, username: currentUser.username, content: replyCurrent },
    ]);
  }

  console.log("updatedReply:", updatedReply);
  return (
    <div>
      {currentUser.username}
      <textarea onChange={(event) => setReplyCurrent(event.target.value)} />
      <button
        onClick={createComment}
        onChange={() => setRepliesArr(updatedReply)}
      >
        Submit
      </button>
    </div>
  );
}
