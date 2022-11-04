import logo from "./logo.svg";
import "./app.sass";
import data from "./data.json";
import BlockComment from "./BlockComment";

function App() {
  const comments = data.comments.map((comment) => (
    <BlockComment comment={comment} key={comment.id} />
  ));
  return (
    <div className="app app-grid">
      <div className="app-content">
        <div className="app-list"> {comments} </div>
      </div>
    </div>
  );
}

export default App;
