import styles from "./PostPreview.module.css";

function PostPreview(props) {
  //const url = "www.reddit.com" + props.url;
  return (
    <div className={styles.postContainer}>
      <h3>{props.title}</h3>
      <img alt="Painting" src={props.img}></img>
      <p>View post</p>
    </div>
  );
}

export default PostPreview;

/*so what we need to do here is make 'View post' into a Link 
which takes you to a page dispkaying the Post component*/

//array of all posts
//allPostsData.data.children

//to get title of first post:
//allPostsData.data.children[1].data.title

//to get title of second post:
//allPostsData.data.children[2].data.title
