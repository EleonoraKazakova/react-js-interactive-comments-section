import "../../styles/buttons/submit-btn.sass";

export default function SubmitBtn({
  createComment,
  setRepliesArr,
  updatedReply,
}) {
  return (
    <button
      onClick={createComment}
      onChange={setRepliesArr}
      className="submit-btn"
    >
      Reply
    </button>
  );
}
