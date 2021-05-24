import React from 'react'
import Form from './UglyFlowersForms.js'
import Flower from './Uglyflowers.js'
import { ContextProvider } from './UglyFlowersContext.js'
import './UglyFlowersApp.css';

function UglyFlowersApp() {
  return (
    <div>
      <ContextProvider>
          <UglyForm />
          <Flowers />
      </ContextProvider>
    </div> 
  );
}

export default UglyFlowersApp;
