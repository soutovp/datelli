import React, { useState } from "react";
import Axios from 'axios';

function App(props) {
  const [values,setValues] = useState();
  
  const handlerChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]:value.target.value,
    })); 
  }
  
  const handleClickButton =()=>{
    // console.log(values);
    Axios.post("http://localhost:3001/register",{
      nome: values.nome,
      senha: values.senha,
    }).then((response)=>{
      (response.data.affectedRows === 0) ? 
        document.getElementById('response').innerHTML = "Usuário já cadastrado!":
        document.getElementById('response').innerHTML = "Cadastro efetuado com sucesso!"
    });
  };
  
  const RetornarValores=()=>{
    Axios.get("http://localhost:3001/retornarValores",{}).then((response)=>{
        document.getElementById('teste').innerHTML = response.username
    });
  };

  return (
    <div id="teste">
      <p id="response"></p>
      <input 
        type="text"
        name="nome"
        onChange={handlerChangeValues}
      />
      <input 
        type="password"  
        name="senha"
        onChange={handlerChangeValues}
      />
      <button onClick={RetornarValores}>Cadastrar</button>
      {/* <button onClick={handleClickButton}>Cadastrar</button> */}
    </div>
  )
}
export default App