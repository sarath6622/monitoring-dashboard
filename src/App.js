import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {

  const isDarkmode = true;
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
