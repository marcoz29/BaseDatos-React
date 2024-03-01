import React, { useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')

  const submitSave = () =>{
    Axios.post("http://localhost:3001/api/insert", {
      nombre: nombre, 
      apellido: apellido, 
      telefono: telefono, 
      correo: correo
    }).then(() => {
      alert("Guardado correctamente");
    })
  };

  return(
    <div className="App">
      <h1>Crud aplicacion</h1>
      
      <div className="form">
        <label>Nombre:</label>
      <input type="text" name="nombre" onChange={(e)=> {
        setNombre(e.target.value)
      }}/>

      <label>Apellido:</label>
      <input type="text" name="apellido" onChange={(e)=> {
        setApellido(e.target.value)
      }}/>

      <label>Telefono:</label>
      <input type="text" name="telefono" onChange={(e)=> {
        setTelefono(e.target.value)
      }}/>

      <label>Correo:</label>
      <input type="text" name="correo" onChange={(e)=> {
        setCorreo(e.target.value)
      }}/>


      <button onClick={submitSave}>Save</button>
      </div>
    </div>
  );
}

export default App;
