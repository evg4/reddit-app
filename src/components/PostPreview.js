function PostPreview(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img className={styles.img} src={props.img}></img>
      <p>View post</p>
    </div>
  );
}

export default PostPreview;
