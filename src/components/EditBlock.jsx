import { useState } from "react";
import EditContent from "./EditContent";
import Block from "./Block";
import "../styles/blockComment.sass";

export default function EditBlock({ reply }) {

  
  return <Block comment={reply} />;
}
