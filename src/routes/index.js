import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../globals/constants';
import HomePage from './home/container';

function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
}

export default App;
