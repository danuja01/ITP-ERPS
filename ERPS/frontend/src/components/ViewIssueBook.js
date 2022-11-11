import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "../components/Assest/Table.css"
import AdminNav from "../components/AdminNav"
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default function IssueBooks(){

 
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        function getBook(){
        axios.get("http://localhost:4000/BookIssue/retriveissue").then((res)=>{
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
      if(result === true){
          axios.delete(`http://localhost:4000/BookIssue/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    }
    const [serQuary,setSerQuary]=useState("");  //search book



    function searchIsuue(event){

          setSerQuary(event.target.value);

    }

    console.log(serQuary);   //end search code


    //pdf generation

        function downloadPDF(){
        const doc = new jsPDF();
        doc.text("                                                Issue books",20,10);
    
        doc.autoTable({
              head: [['ISBN_Number', 'Book_Name', 'Student_ID','Student_Name','Date']],
              body:  books.filter(e=>

                e.ISBN_Number.includes(serQuary) ||
                e.Book_Name.toLowerCase().includes(serQuary)||
                e.Student_ID.toLowerCase().includes(serQuary)|| 
                e.Student_Name.toLowerCase().includes(serQuary)|| 
                e.Date.toLowerCase().includes(serQuary)

                    
                    ).map(function(e,i){
                              return( 
                             [ e.ISBN_Number ,
                               e.Book_Name, 
                               e.Student_ID,
                                e.Student_Name,
                                e.Date
                            ] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("Issued books.pdf");
      }
    return (

        <div className="whitebc">
        <section className='flex gap-6'>

        <AdminNav />

        <div className='w-full mr-12'>

        <ul>
  <li><a  href="/libHome">Home</a></li>
  <li><a  href="/retrive">All Books</a></li>
  <li><a href="/add">Add Book</a></li>
  <li><a class="active" href="/retriveissue">Issued Books</a></li>
  <input type="text"onChange={searchIsuue}  class="searchTerm" placeholder="Search..."/>
  <button  class="button-2" > <span class="text" onClick={downloadPDF}> Generate Report</span></button> 

</ul>             
    <div>
    </div>

    <h1>Issued Books</h1>






           
     <div>

   

     <br/><br/>  <br/>
                

                    <table>
                
                    <tr>
                        <th> ISBN </th>
                        <th> Book Name  </th>
                        <th> Student Id </th>
                        <th> Student Name  </th>
                        <th className='date'> Date  </th>
                        <th> Return  </th>
                        
                        </tr>
                        {                    books.filter(e=>
                                                e.ISBN_Number.includes(serQuary) ||
                                                e.Book_Name.toLowerCase().includes(serQuary)||
                                                e.Student_ID.toLowerCase().includes(serQuary)|| 
                                                e.Student_Name.toLowerCase().includes(serQuary)|| 
                                                e.Date.toLowerCase().includes(serQuary)

                                            )
                        .map(book => ( 
                       
                        <tr>
                        <td>{book.ISBN_Number}</td>
                        <td>{book.Book_Name}</td>
                        <td>{book.Student_ID}</td>
                        <td>{book.Student_Name}</td>
                        <td className='date'>{book.Date}</td>
                        <td>  <button className="button-3 " onClick={() => {deleteDataC(book)}}>Return</button> </td> 
                        </tr>   

                        ))}
                        </table>
                        </div>
                    
                      
            <br></br>
            
        </div>
        </section>
        </div>
         
    )
}