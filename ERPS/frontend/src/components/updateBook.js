import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

function UpdateCard() {

    const [ISBN_Number, setISBN_Number] = useState("");
    const [Book_Name, setBook_Name] = useState("");
    const [Author_Name, setAuthor_Name] = useState("");
    const [Publisher, setPublisher] = useState("");
    const [Location, setLocation] = useState("");

    useEffect(() => {
        try {
            const cardData = location.state.data;
            console.log(location.state.data);
            setISBN_Number(cardData.ISBN_Number);
            setBook_Name(cardData.setAuthor_Name);
            setAuthor_Name(cardData.Author_Name);
            setPublisher(cardData.Publisher);
            setLocation(cardData.Location);

        } catch (error) {
            navigate('/Wallet');
            
        }
        
    }, []) 

    const validate=(e) =>{
        e.preventDefault();

        const dataSample = {
            ISBN_Number, 
            Book_Name,
            Author_Name,
            Publisher,
            Location
        }

        console.log(dataSample);

        axios.put(`http://localhost:8065/book/update${e._id}`,dataSample).then((res) =>{
            alert("Card Updated!");
            console.log(res.state)
            navigate(-1);

            // navigate('/Wallet');
        }).catch(err =>{
            alert(err)
        })
     }

  return (
    <form onSubmit = {(e) => {validate(e)}}>
            <div className="container">
                <label for="ISBN_Number">ISBN Number </label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Employee Name " onChange={(e) => {
                    setISBN_Number(e.target.value);
                }}/>
            </div>

            <div className="container">
                <label for="Book_Name">Book Name </label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Employee ID " onChange={(e)=>{
                    setBook_Name(e.target.value);
                }}/>
            </div>

            <div className="container">
                <label for="Author_Name"> Author Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter type of the job" onChange={(e)=>{
                    setAuthor_Name(e.target.value);
                }}/>
            </div>

            <div className="container">
                <label for="Publisher">Publisher </label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter the user name" onChange={(e)=>{
                    setPublisher(e.target.value);
                }}/>
            </div>

            <div className="container">
                <label for="Location">Location</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter the password" onChange={(e)=>{
                    setLocation(e.target.value);
                }}/>
            </div>

          

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
  )
}

export default UpdateCard