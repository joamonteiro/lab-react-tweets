import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      {/* <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">@{tweet.user.handle}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span> */}
          <User userData={tweet.user}/>
          <Timestamp time={tweet.timestamp} />
        </div>

        {/* <p className="message">
          {tweet.message}
        </p> */}
        <Message message={tweet.message}/>

        {/* <div className="actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div> */}
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
