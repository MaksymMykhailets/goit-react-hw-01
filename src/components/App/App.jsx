import Profile from '../Profile/Profile';
import FriendList from '../Friends/Friends';
import userData from '/src/userData.json';
import friends from '/src/friends.json';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
