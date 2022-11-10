import ReplyImg from "../../images/reply-solid.svg";
import "../../styles/buttons/reply-btn.sass";

export default function ReplyBtn({ setReplyStatus, replyStatus }) {
  return (
    <div
      onClick={() => setReplyStatus(!replyStatus)}
      className="block-comment-reply-btn"
    >
      <img src={ReplyImg} className="block-comment-arrow" />
      Reply
    </div>
  );
}
