
import { useState, useEffect } from "react";
import "./App.css";


function App() {

const[input, setInput] = useState('')
const[tarefas, setTarefas] = useState([]);

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

  setTarefas([...tarefas, input]);
  setInput('');
}

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>Lista de tarefas </label>
          <input value={input} onChange={ (e) => setInput(e.target.value)}  placeholder="Digite sua lista"/>
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
