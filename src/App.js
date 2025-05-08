
import { useState, useEffect } from "react";
import "./App.css";


function App() {

const[input, setInput] = useState('')
const[datainput, setDataInput] = useState('')
const[tarefas, setTarefas] = useState([]);
const[area, setAreas] = useState('')

useEffect(() =>{
  const tarefasStorage = localStorage.getItem('@tarefa');

  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage))
  }
}, []);


useEffect(()=>{
  localStorage.setItem('@tarefa', JSON.stringify(tarefas))
}, [tarefas]);

function handleSubmit(e){
  e.preventDefault();

  setTarefas([...tarefas, input, datainput, area]);
  setInput('');
  
}

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>Lista de tarefas </label>
          <input value={input} onChange={ (e) => setInput(e.target.value)}  placeholder="Digite uma tarefa.... " required/>


          
          <input className="data" type="date" value={datainput} onChange={ (e) => setDataInput(e.target.value)} required/>
          <textarea value={area} onChange={(e) => setAreas(e.target.value)} className="textArea" placeholder="Digite o detalhe da sua tarefa...."></textarea> <br/>

          <button type="submit">Adicionar Lista</button>
        </form>

        <ul>
          {tarefas.map(tarefas =>(
            <li key={tarefas}>{tarefas}</li>
            
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
