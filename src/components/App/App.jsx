import Profile from '../Profile/Profile';
import FriendList from '../Friends/Friends';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import './App.module.css';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
