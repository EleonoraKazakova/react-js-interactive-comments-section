import "./styles/app.sass";
import data from "./data.json";
import Block from "./components/Block";

function App() {
  const comments = data.comments.map((comment) => (
    <Block comment={comment} key={comment.id} />
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
