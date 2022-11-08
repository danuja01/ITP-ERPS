import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Degrees from './pages/Degrees';
import AddDegree from './pages/AddDegree';
import Degree from './pages/Degree';
import UpdateDegree from './pages/UpdateDegree';
import NotFound from './pages/NotFound';
import Applications from './pages/Applications';
import Test from './pages/Test';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';

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

          {/* Students Applications admin routes */}
          <Route path='/admin/applications' element={<Applications />} />

          {/* Test path */}
          <Route path='/admin/test' element={<Test />} />
          <Route path='/admin/signup' element={<AdminSignup />} />
          <Route path='/admin/login' element={<AdminLogin />} />

          {/* 404 page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
