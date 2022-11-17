import "./styles/app.sass";
import data from "./data.json";
import Block from "./components/Block";
import ReplyBlock from "./components/ReplyBlock";
import { useState } from "react";
import CurrentUser from "./components/CurrentUser";

function App() {
  const statusMessage = true;
  const [commentsArr, setCommentsArr] = useState([]);
  const currentUser = data.currentUser.username;
  const [allMessages, setAllMessages] = useState(data.comments);

  const comments = allMessages.map((comment) => (
    <Block
      comment={comment}
      key={comment.id}
      currentUser={currentUser}
      setAllMessages={setAllMessages}
    />
  ));

  console.log("allMessages:", allMessages);
  return (
    <div className="app app-grid">
      <div className="app-content">
        <CurrentUser currentUser={currentUser} />

        <div className="app-list"> {comments} </div>
        {statusMessage ? (
          <ReplyBlock
            reply={{ replies: [] }}
            setRepliesArr={setAllMessages}
            repliesArr={allMessages}
            setReplyStatus={true}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
