import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddBook from './components/AddBook'
import AllBook from './components/ViewAllBook'
import Home from'./components/Home' 
import IssueBook from'./components/IssueBook' 
import ViewIssueBook from'./components/ViewIssueBook'  
import UpdateBook from'./components/UpdateBook' 
  
   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const App=() =>{                                         
  return (
<BrowserRouter>
        <Routes>
     


         {/* Degrees admin routes */}
         <Route path="/libHome" element={<Home/>}/>
        <Route path="/add" element={<AddBook/>}/>
        <Route path="/retrive" element={<AllBook/>}/>
        <Route path="/issue/:id" element={<IssueBook/>}/>
        <Route path="/retriveissue" element={<ViewIssueBook/>}/>        
        <Route path="/update/:id" element={<UpdateBook/>}/>

        </Routes>
      </BrowserRouter>



  );
}

export default App;
