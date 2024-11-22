import logo from './platzi.webp';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoTitle from './components/TodoTitle';
import TodoSearch from './components/TodoSearch';
import TodoAdd from './components/TodoAdd';
import {TodoList} from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoTitle  completed={16} total={25}/>
      <TodoSearch />
      <TodoList>
        <TodoItem task = {"aprender git"}/>
        <TodoItem task = {"aprender git"}/>
        <TodoItem task = {"aprender git"}/>
      </TodoList>

      <TodoAdd />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Aprender git</p>
      <span>X</span>
    </li>
  );
} */

export default App;

// npm install -D nodemon, es una herramienta que reinicia automáticamente el servidor cada vez que detecta cambios en los archivos del proyecto, ahorrando tiempo al desarrollador, ya que no necesita detener y reiniciar manualmente el servidor.
