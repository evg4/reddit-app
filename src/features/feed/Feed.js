import Post from "../../components/Post/Post";
import { sampleJson } from "./sampleData";

function Feed() {
  //the first comment
  console.log(sampleJson[1].data.children[0].data.body);
  //the second comment
  console.log(sampleJson[1].data.children[1].data.body);
  //this is a reply to the first comment, hence the nested location
  console.log(
    sampleJson[1].data.children[0].data.replies.data.children[0].data.body
  );

  return (
    <>
      {/*the title of the post */}
      <p>{sampleJson[0].data.children[0].data.title}</p>
      <ul>
        {/*mapping over the array containing all the comments to make them into list items
        note this does not include replies to comments, which are more nested */}
        {sampleJson[1].data.children.map((comment) => {
          return <li>{comment.data.body}</li>;
        })}
      </ul>
      <p>helol</p>
    </>
  );
}

export default Feed;
