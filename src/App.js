import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Первый Branch DEV1</h1>
        <div>
          <div>Dev-Общее</div>
          <div>DEV1-11</div>
          <div>DEV1-12</div>
          <div>DEV1-13</div>
          <div> dev2-aaa </div>
          <div> dev2-bbb </div>
          <div> dev2-ccc </div>
          <div> dev2-cc1 </div>
          <div> dev2-cc2 </div>

        </div>
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
