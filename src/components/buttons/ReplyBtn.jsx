import "../../styles/buttons/reply-btn.sass";

export default function ReplyBtn({ setReplyStatus, replyStatus }) {
  return (
    <button
      onClick={() => setReplyStatus(!replyStatus)}
      className="block-comment-reply-btn"
    >
      Reply
    </button>
  );
}
