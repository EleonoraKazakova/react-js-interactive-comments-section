import { useState } from "react";

export default function EditContent({ content, edit }) {
  const baseContent = content;
  const [replyContent, setEditContent] = useState(baseContent);

  return (
    <div>
      {edit ? (
        <textarea
          onChange={(event) => setEditContent(event.target.value)}
          defaultValue={replyContent}
        />
      ) : (
        replyContent
      )}
    </div>
  );
}
