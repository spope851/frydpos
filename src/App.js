import logo from './logo.svg';
import './App.css';
import { IngestData } from './components/buttons/ingest-data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fry'd
        </p>
        <IngestData />
      </header>
    </div>
  );
}

export default App;
