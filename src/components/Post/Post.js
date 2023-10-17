import styles from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <h3 className={styles.h3}>{props.title}</h3>
      <img className={styles.img} src={props.img}></img>
      <ul className={styles.ul}>
        {props.comments.map((comment) => {
          return (
            <li className={styles.li} key={comment.data.id}>
              {comment.data.body}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Post;

// first comment id:
// sampleJson[1].data.children[0].data.id

// comments={sampleJson[1].data.children}
