import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminNav from './components/AdminNav';
import Dashboard from './pages/Dashboard';
import ViewPayments from './components/ViewPayments'
import UpdatePayment from './components/UpdatePayment'
import AddPayment from './components/AddPayment'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className=' flex gap-12'>
          <AdminNav />
          <Routes>
            <Route path = '/payments' exact element={<ViewPayments />}/>
            <Route path = '/createPayment' exact element={<AddPayment />}/>
            <Route path='/updatePayment/:id' exact element={<UpdatePayment/>} />
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
