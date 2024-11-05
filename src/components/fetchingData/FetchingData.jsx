import { useFetch } from "../../hooks/useFetch";

const FetchingData = () => {
  const { data: users } = useFetch("https://jsonplaceholder.org/users");
  return (
    <div>
      {users.map((usuario) => {
        return <h2 key={usuario.id}>{usuario.firstname}</h2>;
      })}
    </div>
  );
};

export default FetchingData;

// sumar() --> 2
// <Sumar /> --> div con usuarios
