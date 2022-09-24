import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminNav from './components/AdminNav';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className=' flex gap-12'>
          <AdminNav />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
