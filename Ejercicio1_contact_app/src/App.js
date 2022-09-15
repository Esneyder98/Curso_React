import logo from './logo.svg';
import './App.css';
import ListContacts from './components/Container/ListContacts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContacts></ListContacts>
        
      </header>
    </div>
  );
}

export default App;
