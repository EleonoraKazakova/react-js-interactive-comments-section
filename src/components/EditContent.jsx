import { useState } from "react";

export default function EditContent({ content, edit }) {
  const [replyContent, setEditContent] = useState(content);

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
