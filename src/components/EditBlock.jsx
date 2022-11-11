import { useState } from "react";
import EditContent from "./EditContent";
import Block from "./Block";
import "../styles/blockComment.sass";

export default function EditBlock({ reply }) {
 /* const [edit, setEdit] = useState(false);
  function editContent(event) {
    event.preventDefault();
    setEdit(!edit);
  }*/

  console.log("reply:", reply);
  return <Block comment={reply} />;
}
