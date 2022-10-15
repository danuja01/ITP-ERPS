import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "../components/Assest/form.css"
import "../components/Assest/Button.css"

export default function IssueBooks(){

 
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        function getBook(){
        axios.get("http://localhost:8065/BookIssue/retriveissue").then((res)=>{
            setBooks(res.data);
            console.log(res.data)
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getBook();
    },[books])
    const deleteDataC = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8065/BookIssue/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    }
    return (
       
        <div>
            <h2 className='h2'>All Issued Books</h2>

             {books.map(book => ( 
                
                <div>
                    <br></br>
                    <table width={"100%"} border={5} align="center">
                
                    <tr>
                        <th> Student Id </th>
                        <th> Student Name  </th>
                        <th> ISBN </th>
                        <th> Book Name  </th>
                        <th> Date  </th>
                    
                        </tr>
                        <br></br>
                        <tr>
                        <td>{book.Student_ID}</td>
                        <td>{book.Student_Name}</td>
                        <td>{book.ISBN_Number}</td>
                        <td>{book.Book_Name}</td>
                        <td>{book.Date}</td>
                                         
                        <button className="button2" onClick={() => {deleteDataC(book)}}>Delete</button>
                        </tr>   
                    
                        <br></br> 
                       
                        </table>
                        </div>
                    
                        ))}
            <br></br>
            
        </div>
         
    )
}