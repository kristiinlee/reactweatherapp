import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    
        <Weather defaultCity="New York" />
        <footer>
          This page was coded by <a href="https://github.com/kristiinlee" target="_blank" rel="noreferrer">Kristin Jones</a> and open-sourced on <a href="https://github.com/kristiinlee/reactweatherapp" target="_blank" rel="noreferrer">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
