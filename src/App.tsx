import './App.css';
import Home from './assets/Routes/Home/Home';
import Quiz from './assets/Routes/Quiz/Quiz';
import Score from './assets/Routes/Score/Score';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  {
    path: '/score',
    element: <Score />,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;