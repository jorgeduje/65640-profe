import { useFetch } from "../../hooks/useFetch";

const FetchingComments = () => {
  const { data: comments } = useFetch("https://jsonplaceholder.org/comments");
  return (
    <div>
      {comments.map((comentario) => {
        return <h2 key={comentario.id}>{comentario.comment}</h2>;
      })}
    </div>
  );
};

export default FetchingComments;
