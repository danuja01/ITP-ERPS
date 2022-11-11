import { BrowserRouter, Routes, Route } from 'react-router-dom';

//css
import './App.css';

//hooks
import { useAuthContext } from './hooks/useAuthContext';

//pages & components
import Dashboard from './pages/Dashboard';
import Coursem from './pages/Coursem';
import Addcourse from './pages/Addcourse';
import Managecoursem from './pages/Managecoursem';
import Degrees from './pages/Degrees';
import AddDegree from './pages/AddDegree';
import Degree from './pages/Degree';
import UpdateDegree from './pages/UpdateDegree';
import NotFound from './pages/NotFound';
import Applications from './pages/Applications';
import Test from './pages/Test';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';
import AddBook from './components/AddBook';
import AllBook from './components/ViewAllBook';
import Home from './components/Home';
import IssueBook from './components/IssueBook';
import ViewIssueBook from './components/ViewIssueBook';
import UpdateBook from './components/UpdateBook';

function App() {
  const { admin } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* USER PATHS  */}
          <Route path='/coursem' element={<Coursem />} />

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

          {/* Course Materials */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/addcourse' element={<Addcourse />} />
          <Route path='/admin/Managecoursem' element={<Managecoursem />} />

          {/* lib */}
          <Route path='/libHome' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/retrive' element={<AllBook />} />
          <Route path='/issue/:id' element={<IssueBook />} />
          <Route path='/retriveissue' element={<ViewIssueBook />} />
          <Route path='/update/:id' element={<UpdateBook />} />

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
