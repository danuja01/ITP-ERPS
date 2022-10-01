import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Degrees from './pages/Degrees';
import AddDegree from './pages/AddDegree';
import Coursem from './pages/Coursem';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/degrees' element={<Degrees />} />
          <Route path='/admin/add-degree' element={<AddDegree />} />
          <Route path='/Coursem' element={<Coursem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
