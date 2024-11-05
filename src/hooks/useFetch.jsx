// componente --> retorna jsx  vs customHook --> retorna javascript

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// customHook vs funcion de javascript
export const useFetch = (endpoint) => {
  // puedo usar cosas de react

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = axios(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading };
};

// useFetch( endpoint usuarios ) --> usuarios
// useFetch( ) --> comentarios
//  const {data, loading} = useFetch("http//post")

// const useState = (valorInicial) => {

//   return [variable, ()=>{}]
// }

// const [ pepito, setPepito ] = useState( [] )
