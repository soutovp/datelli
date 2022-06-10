import React, {useState} from 'react';
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
    Axios.post("http://localhost:3001/register",{
      nome:
    })
  };
  return (
    <div>
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
      <button onClick={handleClickButton}>Cadastrar</button>
    </div>
  )
}
export default App