import "../../styles/reply-block.sass";

export default function Textarea({ setReplyCurrent }) {
  return (
    <textarea
      className="textarea"
      role="textbox"
      contentEditable=""
      onChange={(event) => setReplyCurrent(event.target.value)}
    ></textarea>
  );
}
