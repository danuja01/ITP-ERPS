import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "../components/Assest/form.css"
import "../components/Assest/Button.css"

export default function AllBook(){

 
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        function getBook(){
        axios.get("http://localhost:8065/book/retrive").then((res)=>{
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
          axios.delete(`http://localhost:8065/book/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    }
    return (
       
        <div>
            <h2 className='h2'>All Books</h2>

             {books.map(book => ( 
                
                <div>
                    <br></br>
                    <table width={"100%"} border={5} align="center">
                
                    <tr>
                        <th> ISBN Number </th>
                        <th> Book Name  </th>
                        <th> Author Name </th>
                        <th> Publisher  </th>
                        <th> Location  </th>
                    
                        </tr>
                        <br></br>
                        <tr>
                        <td>{book.ISBN_Number}</td>
                        <td>{book.Book_Name}</td>
                        <td>{book.Author_Name}</td>
                        <td>{book.Publisher}</td>
                        <td>{book.Location}</td>

                        <button className="button2">Update</button>
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