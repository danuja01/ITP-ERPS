import { BrowserRouter, Routes, Route } from 'react-router-dom';

//hooks
import { useAuthContext } from './hooks/useAuthContext';

//pages & components
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
  const { admin } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />

          {/* ADMIN PATHSS */}
          <Route path='/admin/login' element={<AdminLogin />} />

          <Route
            path='/admin/signup'
            element={admin ? <AdminSignup /> : <AdminLogin />}
          />
          {/* Degrees admin routes */}
          <Route
            path='/admin/degrees'
            element={admin ? <Degrees /> : <AdminLogin />}
          />
          <Route
            path='/admin/add-degree'
            element={admin ? <AddDegree /> : <AdminLogin />}
          />
          <Route
            path='/admin/degree/:id'
            element={admin ? <Degree /> : <AdminLogin />}
          />
          <Route
            path='/admin/degree/update/:id'
            element={admin ? <UpdateDegree /> : <AdminLogin />}
          />

          {/* Students Applications admin routes */}
          <Route
            path='/admin/applications'
            element={admin ? <Applications /> : <AdminLogin />}
          />

          {/* Test path */}
          <Route path='/admin/test' element={<Test />} />

          {/* 404 page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
