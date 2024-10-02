
import './App.css';
//불러오려고 하는 컴포넌트 import
import Menu from './components/Menu';
import MenuOff from './components/MenuOff';


function App() {
  let display = 'off';

  return (
    <div className="App">
      {
        display==='on'? <Menu />:<MenuOff/>
      }
    </div>
  );
}

export default App;
