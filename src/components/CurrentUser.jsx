import data from "../data.json";
import "../styles/app.sass";
import "../styles/currentuser.sass";

export default function CurrentUser({ currentUser }) {
  return (
    <div className="current-user">
      <div className="current-user-content">
        <img
          src={require(`../images/${data.currentUser.image.jpg}`)}
          className="app-avatar"
        />
        <p>{currentUser}</p>
      </div>
    </div>
  );
}
