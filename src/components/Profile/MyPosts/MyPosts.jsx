import s from './MyPosts.module.css'
import Post from './post/Post';


const MyPosts = () => {
  return (
    <div >
    <div className={s.addPosts}>
      Создать новый пост
      <div>
        <textarea className={s.inputPost} placeholder="Чем бы хотели поделиться?" />
        <div className={s.buttonContainer}><button className={s.inputButton}>Опубликовать</button></div>
      </div>
      </div>
      <div className={s.myPosts}>
        <Post message='Привет, как ты?' />
        <Post message='Это мой первый пост!' />
    </div>
    </div>
  )
}

export default MyPosts;