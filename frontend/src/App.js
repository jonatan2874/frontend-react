import React from 'react';
import 'normalize.css';
import './App.css';
import useHeader from './components/Header/Header';
import useSidebar from './components/Sidebar/Sidebar';
import useContent from './components/Content/Content';

function App() {
  return (
    <div className="d-flex" id="wrapper">
      {useSidebar()}
    <div id="page-content-wrapper">
      {useHeader()}
      {useContent()}
    </div>
    </div>
  );
}

export default App;
