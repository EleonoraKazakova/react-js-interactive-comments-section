import { useState } from "react";
import EditBlock from "./EditBlock";
import CommentScore from "./CommentScore";
import ReplyBlock from "./ReplyBlock";
import ReplyBtn from "./buttons/ReplyBtn";
import EditContent from "./EditContent";
import "../styles/blockComment.sass";
import Moment from "react-moment";
import "moment-timezone";

export default function Block({ comment, currentUser, setAllMessages }) {
  const [edit, setEdit] = useState(false);
  const [replyStatus, setReplyStatus] = useState(false);
  const [repliesArr, setRepliesArr] = useState(comment.replies);
  console.log("repliesArr:", repliesArr);
  console.log("comment:", comment);
  const date = new Date();

  const replyesBlock = repliesArr.map((reply) => (
    <Block
      comment={reply}
      key={reply.id}
      currentUser={currentUser}
      setAllMessages={setRepliesArr}
    />
  ));

  function editContent() {
    setEdit(!edit);
  }

  function deleteComment() {
    setAllMessages((oldMessages) =>
      oldMessages.filter((el) => el.id !== comment.id)
    );
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

          <span className="block-comment-username">{comment.username}</span>

          <div className="block-comment-time">
            <Moment from={date}>{comment.createdAt}</Moment>
          </div>
        </div>

        <ReplyBtn setReplyStatus={setReplyStatus} replyStatus={replyStatus} />

        <EditContent content={comment.content} edit={edit} />

        {currentUser === comment.username ? (
          <>
            <div onClick={editContent}>
              {edit ? <button>Submit</button> : <button>Edit</button>}
            </div>

            <button onClick={deleteComment}>Delete</button>
          </>
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
