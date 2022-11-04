import { useState } from "react";

export default function ReplyContent({ content, edit }) {
  const baseContent = content;
  const [replyContent, setReplyContent] = useState(baseContent);

  return (
    <div>
      {edit ? (
        <textarea
          onChange={(event) => setReplyContent(event.target.value)}
          defaultValue={replyContent}
        />
      ) : (
        replyContent
      )}
    </div>
  );
}
