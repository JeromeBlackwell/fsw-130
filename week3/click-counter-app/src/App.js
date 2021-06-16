import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/Boil/store.js'
import './App.css';
import SeafoodBoilContainer from './components/SeafoodBoilContainer'

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <SeafoodBoilContainer />  
    </div>
    </Provider>
  );
}

export default App;