import profileavatar from '../../images/profileavatar.jpg';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main>
      <div className={s.profileInfo}>
        <div className={s.profileAbout}>
          О себе:
        </div>
        <div className={s.profileAvatarAndText}>
          <div className={s.profileText}>
            <div className={s.profiledescription}>
              <div className={s.name}>Имя: Артём К.</div>
              <div className={s.age}>Возраст: 23 года</div>
              <div className={s.contry}>Страна: Россия</div>
              <div className={s.city}>Город: Чита</div>
            </div>
          </div>
          <div className={s.profileAvatar}>
            <img src={profileavatar} height="200px" />
          </div>
        </div>
      </div>
      <MyPosts />
    </main>
  )
}

export default Profile;