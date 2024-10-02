import React from 'react';
import Menu from './components/Menu';  // components 폴더에서 Menu 불러오기
import Contents from './components/Contents';  // components 폴더에서 Contents 불러오기
import './App.css';  // CSS 파일 불러오기

function App() {
  return (
    <div className="App">
      <Menu />
      <Contents />
    </div>
  );
}

export default App;
