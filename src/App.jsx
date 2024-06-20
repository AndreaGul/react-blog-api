import { useState, useEffect } from "react";
import Form from "./components/Form";
import ElencoPost from "./components/ElencoPost";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

function App() {
  const [response, setResponse] = useState(null);

  const fetchPost = async () => {
    try {
      setResponse(null);
      const url = `${apiUrl}/posts`;
      const { data } = await axios.get(url);
      setResponse(data);
      console.log("Dati ricevuti:", data);
    } catch (error) {
      console.error("Errore durante il recupero dei post:", error);
      // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Form />
      <ElencoPost response={response} />
    </>
  );
}

export default App;