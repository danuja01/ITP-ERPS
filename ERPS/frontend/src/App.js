import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Coursem from './pages/Coursem';
import Addcourse from './pages/Addcourse';
import Managecoursem from './pages/Managecoursem';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/coursem' element={<Coursem />} />
          <Route path='/admin/addcourse' element={<Addcourse />} />
          <Route path='/admin/Managecoursem' element={<Managecoursem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
