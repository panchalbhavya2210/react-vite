import React, { useState } from 'react'
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const root = ReactDOM.createRoot(
    document.getElementById('root'),
  )
  const element = (
    <div>
      <h1>Hello World, The Time Is</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  )
  root.render(element)
}
setInterval(App, 1000)
export default App
