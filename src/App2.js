import logo from './logo.svg';
import './App.css';
//불러오려고 하는 컴포넌트 import
import Hello from './components/Hello';
import Welcome from'./components/Welcome';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Welcome/>
    </div>
  );
}

export default App;
