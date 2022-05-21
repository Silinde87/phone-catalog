import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../globals/constants';
import HomePage from './home/container';
import PhonePage from './phone/container';

function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<HomePage />} />
      <Route exact path={ROUTES.PHONE} element={<PhonePage />} />
    </Routes>
  );
}

export default App;
