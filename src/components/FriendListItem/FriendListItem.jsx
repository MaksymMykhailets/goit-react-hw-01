import css from './FriendListItem.module.css';

function FriendListItem({ avatar, userName, isOnline }) {
  return (
    <li className={css.card}>
      <img className={css.image} src={avatar} alt={userName} width="48" />
      <p className={css.name}>{userName}</p>
      {isOnline ? (
        <p className={css.online}>isOnline</p>
      ) : (
        <p className={css.offline}>isOffline</p>
      )}
    </li>
  );
}

export default FriendListItem;
