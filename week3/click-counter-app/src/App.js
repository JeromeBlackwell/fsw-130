import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/Boil/store.js'
import './App.css';
import SeafoodBoil from './components/SeafoodBoil'

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <SeafoodBoil />  
    </div>
    </Provider>
  );
}

export default App;