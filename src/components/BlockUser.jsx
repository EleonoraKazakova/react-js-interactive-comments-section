import "../styles/blockComment.sass";
import Moment from "react-moment";
import "moment-timezone";

export default function BlockUser({comment}) {
  const date = new Date();
console.log('comment:', comment)
  return (
    <>
      <img
        src={require(`../images/${comment.user.image.jpg}`)}
        className="block-comment-img"
      />
      <span className="block-comment-username">{comment.user.username}</span>
      <div className="block-comment-time">
        <Moment from={date}>{comment.createdAt}</Moment>
      </div>
    </>
  );
}
