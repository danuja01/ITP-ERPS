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
import UpdateCoursem from './pages/UpdateCoursem';
import Degrees from './pages/Degrees';
import AddDegree from './pages/AddDegree';
import Degree from './pages/Degree';
import UpdateDegree from './pages/UpdateDegree';
import NotFound from './pages/NotFound';
import Applications from './pages/Applications';
import Test from './pages/Test';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';
import ViewPayments from './pages/ViewPayments';
import UpdatePayment from './pages/UpdatePayment';
import AddPayment from './pages/AddPayment';
import SummaryPayment from './pages/SummaryPayments';
import AddBook from './components/AddBook';
import AllBook from './components/ViewAllBook';
import LibHome from './components/Home';
import IssueBook from './components/IssueBook';
import ViewIssueBook from './components/ViewIssueBook';
import UpdateBook from './components/UpdateBook';
import Home from './pages/Home';
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
import AddItem from './pages/AddItem';
import AllItems from './pages/AllItems';
import EditItem from './pages/UpdateItem';

function App() {
  const { admin } = useAuthContext();

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path='/Home' element={<Home />} />

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
          <Route path='/admin/updateCourse/:id' element={<UpdateCoursem />} />

          {/* lib */}
          <Route path='/libHome' element={<LibHome />} />
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

          {/* Payments */}
          <Route path='admin/payments' exact element={<ViewPayments />} />
          <Route path='/createPayment' exact element={<AddPayment />} />
          <Route path='/updatePayment/:id' exact element={<UpdatePayment />} />
          <Route path='/summaryPayment' exact element={<SummaryPayment />} />

          {/* Food Items */}
          <Route path='/foods' element={<FoodItem />} />
          <Route path='/breakfastitems' element={<BreakfastItems />} />
          <Route path='/lunchitems' element={<LunchItems />} />
          <Route path='/Dinner' element={<Dinner />} />
          <Route path='/addfooditem' element={<Addfooditem />} />
          <Route path='/editfooditem/:id' element={<Editfooditem />} />
          <Route path='/Foodhomelod' element={<Foodhomelod />} />
          <Route path='/MainFoodHome' element={<MainFoodHome />} />
          <Route path='/BreakfastHome' element={<BreakfastHome />} />
          <Route path='/LunchHome' element={<LunchHome />} />
          <Route path='/DinnertHome' element={<DinnertHome />} />
          <Route path='/ViewMenu' element={<ViewMenu />} />
          <Route path='/cart' element={<Cart />} />

          {/* Inventory */}
          <Route exact path='/admin/allItems' element={<AllItems />} />
          <Route exact path='/admin/addItem' element={<AddItem />} />
          <Route exact path='/admin/updateItem' element={<EditItem />} />

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
