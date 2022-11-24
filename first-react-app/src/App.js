import logo from './logo.svg';
import './App.css';

function App() {
  const h1Style = {
    "fontSize":"30px",
    "color": "#cc0000",
    "textTransform": "uppercase"}
  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{h1Style}}>My react page</h1>
        
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="bio">I am defo seeing why people use React, but I am still a little confused</h2>
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
