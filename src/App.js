import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Characters from './components/Characters';

function App() {
  const [ nasaPhoto, setNasaPhoto ] = useState([]);
 
  useEffect(() =>{
   axios.get('https://rickandmortyapi.com/api/character')
   .then((res) =>{
     setNasaPhoto(res.data.results);
     console.log(res.data.results);
   })
   .catch(err => console.log(err))
 }, [])

 console.log(nasaPhoto);

  return (
    <div className="App">
      <Characters characters = {nasaPhoto}/>
    
    </div>
  );
}
export default App;
