import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ScoreProvider } from '../src/assets/Components/ScoreContext/ScoreContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
)
