import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
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
          Aprenderé React
        </a>
      </header>
    </div>
  );
}

export default App;

// npm install -D nodemon, es una herramienta que reinicia automáticamente el servidor cada vez que detecta cambios en los archivos del proyecto, ahorrando tiempo al desarrollador, ya que no necesita detener y reiniciar manualmente el servidor.
