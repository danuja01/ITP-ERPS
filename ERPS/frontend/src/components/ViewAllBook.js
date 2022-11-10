import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "../components/Assest/Table.css"
import "../components/Assest/Topbar.css"
import { Link } from "react-router-dom";
import AdminNav from "../components/AdminNav"
import jsPDF from 'jspdf'
import 'jspdf-autotable'


export default function AllBook(){
 
    const [books, setBooks] = useState([]);
    
    useEffect(()=>{
        function getBook(){
        axios.get("http://localhost:4000/book/retrive").then((res)=>{
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
      if(result===true){
          axios.delete(`http://localhost:4000/book/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    }

    const [serQuary,setSerQuary]=useState("");  //search book



    function searchBooks(event){

          setSerQuary(event.target.value);

    }

    console.log(serQuary);   //end search code



    //pdf generation

        function downloadPDF(){
        const doc = new jsPDF();
        doc.text("All books",20,10);
    
        doc.autoTable({
              head: [['ISBN_Number', 'Book_Name', 'Author_name','Location','Copies']],
              body:  books.filter(e=>
                
                e.ISBN_Number.includes(serQuary) ||
                e.Book_Name.toLowerCase().includes(serQuary)||
                e.Book_Name.includes(serQuary)||
                e.Author_Name.toLowerCase().toUpperCase().includes(serQuary)|| 
                e.Location.toLowerCase().includes(serQuary)||
                e.Copies.toLowerCase().includes(serQuary)

                    
                    ).map(function(e,i){
                              return( 
                             [ e.ISBN_Number ,
                               e.Book_Name, 
                               e.Author_Name,
                               e.Location,
                               e.Copies
                            ] 
                                 
                                        
                              );
                    }) 

                    })
        

        doc.save("Available books.pdf");
      }

    return (
        <div className="whitebc">

        <section className='flex gap-6'>

<AdminNav />

<div className='w-full mr-12'>


<ul>
  <li><a  href="/libHome">Home</a></li>
  <li><a class="active" href="/retrive">All Books</a></li>
  <li><a href="/add">Add Book</a></li>
  <li><a href="/retriveissue">Issued Books</a></li>
  <input type="text"onChange={searchBooks}  class="searchTerm" placeholder="Search..."/>
  <button  class="button-2"> <span class="text" onClick={downloadPDF}> Generate Report</span></button> 

</ul>             
    <div>
    </div>

    <h1>All Books</h1>

            <br/><br/><br/>
            <table >
                        <tr>
                        <th> ISBN Number </th>
                        <th> Book Name  </th>
                        <th> Author Name </th>
                        <th> Location  </th>
                        <th> Copies</th>
                        <th> Update  </th>
                        <th> Delete  </th>
                        <th> Issue Book </th>
                       </tr>

                         {
                            books.filter(e=>
                            e.ISBN_Number.includes(serQuary) ||
                            e.Book_Name.toLowerCase().includes(serQuary)||
                            e.Author_Name.toLowerCase().includes(serQuary)|| 
                            e.Location.toLowerCase().includes(serQuary)||
                            e.Copies.toLowerCase().includes(serQuary)


                                            )
                                            
                                            
                                            
                                            
                                            .map((e,i) => (
                                        <tr>
                                       

                        <td>{e.ISBN_Number}</td>
                        <td>{e.Book_Name}</td>
                        <td>{e.Author_Name}</td>
                        <td>{e.Location}</td>
                        <td>{e.Copies}</td>
                        <td> <Link to={"/update/"+e._id} className="button-3 ">Update</Link> </td>
                        <td> <button className="button-3 " onClick={() => {deleteDataC(e)}}>Delete</button></td>
                        <td> <Link to={"/issue/"+e._id} className="button-3 ">Issue Book</Link> </td>
                                     
                                        </tr>
                                        ))
                                                                            
                                    }

                     </table>
        </div>




</section>
</div>
       
        

        
         
    )
}