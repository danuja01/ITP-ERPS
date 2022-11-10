import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import AddItem from './pages/AddItem';
import AllItems from './pages/AllItems';
import EditItem from './pages/UpdateItem';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/admin/allItems' element={<AllItems />} />
          <Route exact path='/admin/addItem' element={<AddItem />} />
          <Route exact path='/admin/updateItem' element={<EditItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
