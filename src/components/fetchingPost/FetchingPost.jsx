import { useFetch } from "../../hooks/useFetch";

const FetchingPost = () => {
  const { data: posts } = useFetch("https://jsonplaceholder.org/posts");

  return (
    <div>
      {posts.map((post) => {
        return <h2 key={post.id}>{post.title}</h2>;
      })}
    </div>
  );
};

export default FetchingPost;
