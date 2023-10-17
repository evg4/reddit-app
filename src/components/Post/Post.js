import styles from "./Post.module.css";

//this won't have props. think i need to use useParams instead?

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

//if i have clicked on a specific post and am accessing the .json of that,
//the following is true:

// post title
// sampleJson[0].data.children[0].data.title

// id for each post
// sampleJson[0].data.children[0].data.id

// all comments
// sampleJson[1].data.children

// first comment:
// sampleJson[1].data.children[0].data.body

// first comment id:
// sampleJson[1].data.children[0].data.id

// second comment:
// sampleJson[1].data.children[1].data.body

// reply to 1st comment:
// sampleJson[1].data.children[0].data.replies.data.children[0].data.body
