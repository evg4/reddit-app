import Post from "../../components/Post/Post";
import { sampleJson } from "./sampleData";

function Feed() {
  //console.log(sampleJson[0].data.children[0].data.preview.images[0].source.url);
  return (
    <>
      <Post
        title={sampleJson[0].data.children[0].data.title}
        comments={sampleJson[1].data.children}
        img={sampleJson[0].data.children[0].data.url_overridden_by_dest}
      />
    </>
  );
}

export default Feed;

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
