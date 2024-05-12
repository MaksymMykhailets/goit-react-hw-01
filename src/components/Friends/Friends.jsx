import FriendListItem from '../FriendListItem/FriendListItem';
import css from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            userName={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
