import { useState } from "react";
import BlockUser from "./BlockUser";
import CommentScore from "./CommentScore";
import ReplyBlock from "./ReplyBlock";
import ReplyBtn from "./buttons/ReplyBtn";
import EditContent from "./EditContent";
import "../styles/blockComment.sass";

export default function Block({ comment, currentUser, setAllMessages }) {
  const [edit, setEdit] = useState(false);
  const [replyStatus, setReplyStatus] = useState(false);
  const [repliesArr, setRepliesArr] = useState(comment.replies);

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
          <BlockUser comment={comment} />
        </div>

        <div className="block-comment-buttons">
          {currentUser === comment.username ? (
            <>
              <button onClick={deleteComment} className="block-comment-delete">
                Delete
              </button>

              <div onClick={editContent}>
                {edit ? (
                  <button>Submit</button>
                ) : (
                  <button className="block-comment-edit">Edit</button>
                )}
              </div>
            </>
          ) : (
            <ReplyBtn
              setReplyStatus={setReplyStatus}
              replyStatus={replyStatus}
            />
          )}
        </div>
        <div className="block-comment-content">
          <EditContent content={comment.content} edit={edit} />
        </div>
      </div>

      {replyesBlock.length > 0 ? (
        <div className="block-comment-reply-block">{replyesBlock}</div>
      ) : null}

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
