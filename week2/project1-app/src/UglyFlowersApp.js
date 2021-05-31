import React from 'react'
import Form from './UglyFlowersForms.js'
import Flowers from './UglyFlowers.js'
import { ContextProvider } from './UglyFlowersContext.js'
import './UglyFlowersApp.css';

function UglyFlowersApp() {
  return (
    <div>
      <ContextProvider>
          <Form />
          <Flowers />
      </ContextProvider>
    </div> 
  );
}

export default UglyFlowersApp;