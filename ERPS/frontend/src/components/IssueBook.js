import React, {useState} from "react";
import axios from "axios";
import "../components/Assest/form.css"
import "../components/Assest/Button.css"


export default function IssueBook(){

    const [Student_ID, setStudent_ID] = useState("");
    const [Student_Name, setStudent_Name] = useState("");
    const [ISBN_Number, setISBN_Number] = useState("");
    const [Book_Name, setBook_Name] = useState("");
    const [Date, setDate] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newBook = {
            Student_ID, 
            Student_Name,
            ISBN_Number,
            Book_Name,
            Date
        }
        console.log(newBook)
        axios.post("http://localhost:8065/BookIssue/issue",newBook).then(() => {
            alert("Book Issued");
            
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
         <h2 className="h2">Issue Book</h2>

        <form className="form-style-5" onSubmit={sendData}>
            <div className="container">
                <label for="Student_ID">Student ID  </label>
                <input type="text" className="form-control" id="Student_ID" placeholder="Enter Student ID  " onChange={(e) => {
                    setStudent_ID(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="container">
                <label for="Student_Name">Student Name </label>
                <input type="text" className="form-control" id="Student_Name" placeholder="Enter Student Name " onChange={(e)=>{
                    setStudent_Name(e.target.value);
                }}/>
            </div>
            <br/>
            <div className="container">
                <label for="ISBN_Number"> ISBN Number</label>
                <input type="text" className="form-control" id="ISBN_Number" placeholder="Enter ISBN Number" onChange={(e)=>{
                    setISBN_Number(e.target.value);
                }}/>
            </div>
            <br/>
            <div className="container">
                <label for="Book_Name">Book Name </label>
                <input type="text" className="form-control" id="Publisher" placeholder="Enter Book Name " onChange={(e)=>{
                    setBook_Name(e.target.value);
                }}/>
            </div>
            <br/>
            <div className="container">
                <label for="Date">Date</label>
                <input type="Date" className="form-control" id="Location" placeholder="Enter Date" onChange={(e)=>{
                    setDate(e.target.value);
                }}/>
            </div>
<br/>
            <button class="button" type="submit" > ADD</button>
            <br/>
            <br/>
        
            </form>
            </div>
    )

}