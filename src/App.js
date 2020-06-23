import React from 'react';
import {HashRouter} from 'react-router-dom';
import { ConfigProvider } from "./components/configContext";
import './App.css';
import Main from './components/MainComponent';

function App() {
  return (
    <HashRouter>
      <ConfigProvider >
        <Main />
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
