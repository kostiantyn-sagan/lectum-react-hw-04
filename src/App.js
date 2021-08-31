import { BrowserRouter as Router } from 'react-router-dom';
import { history } from './navigation/history';
import { Routes } from './navigation';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
