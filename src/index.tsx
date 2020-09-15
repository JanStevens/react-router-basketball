import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/App'

function ColorfulBorder() {
  return (
    <ul className="border-container">
      <li className="border-item" style={{ background: 'var(--red)' }} />
      <li className="border-item" style={{ background: 'var(--blue)' }} />
      <li className="border-item" style={{ background: 'var(--pink)' }} />
      <li className="border-item" style={{ background: 'var(--yellow)' }} />
      <li className="border-item" style={{ background: 'var(--aqua)' }} />
    </ul>
  )
}

ReactDOM.render(
  <StrictMode>
    <ColorfulBorder />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
