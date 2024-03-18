import ReactDOM from 'react-dom';
import App from './App.tsx';
import { ScoreProvider } from '../src/assets/Components/ScoreContext/ScoreContext';

ReactDOM.render(
  <ScoreProvider>
      <App />
  </ScoreProvider>,
  document.getElementById('root')
);