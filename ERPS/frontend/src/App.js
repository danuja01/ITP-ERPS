import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MarkAttendance from './components/AddAttendance';
import AddEmployee from './components/AddEmployee';
import AllAttendance from './components/AllAttendance';
import AllEmployee from './components/AllEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Report from './components/Report';
import Report2 from './components/Report2';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />

          <Route path='/admin/mark-attendance' element={<MarkAttendance />} />
          <Route path='/admin/add-employee' element={<AddEmployee />} />
          <Route path='/admin/all-attendance' element={<AllAttendance />} />
          <Route path='/admin/all-employee' element={<AllEmployee />} />
          <Route
            path='admin/update-employee/:id'
            element={<UpdateEmployee />}
          />
          <Route path='/admin/Report' element={<Report />} />
          <Route path='/admin/Report2' element={<Report2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
