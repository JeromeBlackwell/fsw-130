import React from 'react'
import Form from './UglyFlowerForms.js'
import Things from './Uglyflowers.js'
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
