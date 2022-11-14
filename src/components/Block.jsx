import { useState } from "react";
import EditBlock from "./EditBlock";
import CommentScore from "./CommentScore";
import ReplyBlock from "./ReplyBlock";
import ReplyBtn from "./buttons/ReplyBtn";
import EditContent from "./EditContent";
import "../styles/blockComment.sass";
import Moment from "react-moment";
import "moment-timezone";

export default function Block({ comment, currentUser }) {
  const [edit, setEdit] = useState(false);
  const [replyStatus, setReplyStatus] = useState(false);
  const [repliesArr, setRepliesArr] = useState(comment.replies);
  console.log("comment2:", comment);
  const date = new Date();

  const replyesBlock = repliesArr.map((reply) => (
    <EditBlock reply={reply} key={reply.id} />
  ));

  function editContent(event) {
    event.preventDefault();
    setEdit(!edit);
  }

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

          {comment.user.username}

          <Moment from={date}>{comment.createdAt}</Moment>
        </div>

        <ReplyBtn setReplyStatus={setReplyStatus} replyStatus={replyStatus} />

        <EditContent content={comment.content} edit={edit} />
        {currentUser === comment.user.username ? (
          <div onClick={(event) => editContent(event)}>
            {edit ? <button>Submit</button> : <button>Edit</button>}
          </div>
        ) : null}
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
