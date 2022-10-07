import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Degrees from './pages/Degrees';
import AddDegree from './pages/AddDegree';
import Degree from './pages/Degree';
import UpdateDegree from './pages/UpdateDegree';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />

          {/* Degrees admin routes */}
          <Route path='/admin/degrees' element={<Degrees />} />
          <Route path='/admin/add-degree' element={<AddDegree />} />
          <Route path='/admin/degree/:id' element={<Degree />} />
          <Route path='/admin/degree/update/:id' element={<UpdateDegree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
