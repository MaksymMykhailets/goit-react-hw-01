import css from './Profile.module.css';

const Profile = ({ username, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <div className={css.bgWrapper}>
        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers:</span>
            <span>{followers}</span>
          </li>
          <li className={css.item}>
            <span>Views:</span>
            <span>{views}</span>
          </li>
          <li className={css.item}>
            <span>Likes:</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
