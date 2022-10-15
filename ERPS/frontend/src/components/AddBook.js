import React, {useState} from "react";
import axios from "axios";
import "../components/Assest/form.css"
import "../components/Assest/Button.css"


export default function AddBook(){

    const [ISBN_Number, setISBN_Number] = useState("");
    const [Book_Name, setBook_Name] = useState("");
    const [Author_Name, setAuthor_Name] = useState("");
    const [Publisher, setPublisher] = useState("");
    const [Location, setLocation] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newBook = {
            ISBN_Number, 
            Book_Name,
            Author_Name,
            Publisher,
            Location
        }
        console.log(newBook)
        axios.post("http://localhost:8065/book/add",newBook).then(() => {
            alert("Book Added");
            
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
         <h2 className="h2">Add Book</h2>

        <form className="form-style-5" onSubmit={sendData}>
            <div className="container">
                <label for="ISBN_Number">ISBN Number </label>
                <input type="text" className="form-control" id="ISBN_Number" placeholder="Enter ISBN Number " onChange={(e) => {
                    setISBN_Number(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="container">
                <label for="Book_Name">Book Name </label>
                <input type="text" className="form-control" id="Book_Name" placeholder="Enter Book Name " onChange={(e)=>{
                    setBook_Name(e.target.value);
                }}/>
            </div>
            <br/>
            <div className="container">
                <label for="Author_Name"> Author Name</label>
                <input type="text" className="form-control" id="Author_Name" placeholder="Enter Author Name" onChange={(e)=>{
                    setAuthor_Name(e.target.value);
                }}/>
            </div>
            <br/>
            <div className="container">
                <label for="Publisher">Publisher </label>
                <input type="text" className="form-control" id="Publisher" placeholder="Enter Publisher " onChange={(e)=>{
                    setPublisher(e.target.value);
                }}/>
            </div>
            <br/>
            <div className="container">
                <label for="Location">Location</label>
                <input type="text" className="form-control" id="Location" placeholder="Enter Location" onChange={(e)=>{
                    setLocation(e.target.value);
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