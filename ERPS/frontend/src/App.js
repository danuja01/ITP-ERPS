import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ViewPayments from './pages/ViewPayments';
import UpdatePayment from './pages/UpdatePayment';
import AddPayment from './pages/AddPayment';
import SummaryPayment from './pages/SummaryPayments';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/payments' exact element={<ViewPayments />} />
          <Route path='/createPayment' exact element={<AddPayment />} />
          <Route path='/updatePayment/:id' exact element={<UpdatePayment />} />
          <Route path='/summaryPayment' exact element={<SummaryPayment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
