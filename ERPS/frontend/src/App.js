import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import FoodItem from './pages/Fooditem';
import BreakfastItems from './pages/BreakfastItems';
import Dinner from './pages/Dinner';
import Addfooditem from './pages/Addfooditem';
import Editfooditem from './pages/Editfooditem';
import LunchItems from './pages/LunchItems';
import Foodhomelod from './pages/Fooditemhomelod';
import MainFoodHome from './pages/MainFoodHome';
import BreakfastHome from './pages/BreakfastHome';
import LunchHome from './pages/LunchHome';
import DinnertHome from './pages/DinnerHome';
import ViewMenu from './pages/ViewMenu';
import Cart from './pages/Cart';






function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/foods' element={<FoodItem />} />
          <Route path='/breakfastitems' element={<BreakfastItems />} />
          <Route path='/lunchitems' element={<LunchItems />} />
          <Route path='/Dinner' element={<Dinner />} />
          <Route path='/addfooditem' element={<Addfooditem />} />
          <Route path='/editfooditem/:id' element={<Editfooditem />} />

          <Route path='/Home' element={<Home />} />
          <Route path='/Foodhomelod' element={<Foodhomelod/>} />
          <Route path='/MainFoodHome' element={<MainFoodHome/>} />
          <Route path='/BreakfastHome' element={<BreakfastHome/>} />
          <Route path='/LunchHome' element={<LunchHome/>} />
          <Route path='/DinnertHome' element={<DinnertHome/>} />
          <Route path='/ViewMenu' element={<ViewMenu/>} />
          <Route path='/cart' element={<Cart/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
