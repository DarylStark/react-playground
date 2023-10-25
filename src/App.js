import { Header } from "./layout/Header.js";
import { Body } from "./layout/Body.js";
import { Feeter } from "./layout/Feeter.js";

import './css/App.scss';

function App() {
  return (<div className='app'>
    <Header title='Daryl' />
    <Body />
    <Feeter />
  </div>);
}

export default App;
