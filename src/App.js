import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Первый PUSH</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque ducimus, eligendi explicabo fugit hic modi numquam odit, quia repellat ut veritatis.</h4>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit-2 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
