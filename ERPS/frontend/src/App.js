import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddBook from './components/AddBook'
import AllBook from './components/ViewAllBook'
import Sidebar from './components/Sidebar'
import Home from'./components/Home' 
import IssueBook from'./components/IssueBook' 
import ViewIssueBook from'./components/ViewIssueBook'     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const App=() =>{                                         
  return (
    <BrowserRouter>
    <Sidebar>
     <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddBook/>}/>
        <Route path="/retrive" element={<AllBook/>}/>
        <Route path="/issue" element={<IssueBook/>}/>
        <Route path="/retriveissue" element={<ViewIssueBook/>}/>        

     </Routes>
     </Sidebar>
    </BrowserRouter>
  );
}

export default App;
