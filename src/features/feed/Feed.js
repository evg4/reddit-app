import PostPreview from "../../components/PostPreview/PostPreview";
import { allPostsData } from "../../components/PostPreview/allPostsData";
import styles from "./Feed.module.css";

function Feed() {
  const sampleArr = [];
  for (let i = 1; i < 25; i++) {
    sampleArr.push(allPostsData.data.children[i]);
  }

  return (
    <>
      <ul className={styles.ul}>
        {sampleArr.map((post) => {
          return (
            <li key={post.data.id}>
              <PostPreview
                title={post.data.title}
                img={post.data.url_overridden_by_dest}
                //url={post.data.permalink}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Feed;

/*

<Post
  title={sampleJson[0].data.children[0].data.title}
  comments={sampleJson[1].data.children}
  img={sampleJson[0].data.children[0].data.url_overridden_by_dest}
 />

*/

//array of all posts
//allPostsData.data.children

//to get title of first post:
//allPostsData.data.children[1].data.title

//to get title of second post:
//allPostsData.data.children[2].data.title
