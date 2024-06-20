import { useState,useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;



function App() {

  const [ response,setResponse] = useState(null);

const fetchPost= async ()=>{
  setResponse(null);
  const url = `${apiUrl}/posts`;
  const {data} = await axios.get(url);
  setResponse(data);
  console.log(data);
}

useEffect(() => {
  fetchPost();
},[]);

  return (
    <>
      
      < Form />
    
    </>
  )
}

export default App
