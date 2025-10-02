import s from './Post.module.css';
import Avatar from '../../../../images/profileavatar.jpg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={Avatar} alt="Аватар профиля" className={s.postAvatar} />
      <div className={s.postText}>{props.message}</div>
    </div>
  )
}

export default Post;