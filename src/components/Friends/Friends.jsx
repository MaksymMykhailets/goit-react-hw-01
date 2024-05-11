const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <div>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p>
              {friend.isOnline ? <span>Online</span> : <span>Offline</span>}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
