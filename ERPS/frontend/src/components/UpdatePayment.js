import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router";

export default function UpdatePayment(){

    
    const params = useParams();
    const navigate = useNavigate();

    
  
    useEffect(() => {
      async function fetchData() {
        const id = params.id.toString();
        const response = await fetch(`http://localhost:3000/api/payments/search/${params.id.toString()}`);

        
  
        if (!response.ok) {
          const message = `An error has occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const record = await response.json();
        if (!record) {
          window.alert(`Record with id ${id} not found`);
          navigate("/");
          return;
        }

        

        
       // setForm(record);
      }
  
      fetchData();
  
      return;
    }, [params.id, navigate]);
  
    
        const[paymentID,updatePaymentID] = useState("");
        const[paymentDescription,updateDescription] = useState("");
        const[paymentCategory,updateCategory] = useState("");
        const[paymentDate,updateDate] = useState("");
        const[paymentAmount,updateAmount] = useState("");
    
        async function sendData(e){
            e.preventDefault();
            
            const updatePayment = {
                paymentID,
                paymentDescription,
                paymentCategory,
                paymentDate,
                paymentAmount
            }

            if (!paymentID.trim()) {
                alert("Please fill Payment ID");
            } 
    
            else if(!paymentDescription.trim()){
                alert("Please fill Payment description");
            }
            else if(!paymentCategory.trim()){
                alert("Please fill Payment category");
            }
    
            else if(!paymentDate.trim()){
                alert("Please fill Payment date");
            }
    
            else if(!paymentAmount.trim()){
                alert("Please fill Payment Amount");
            }
            
            else{
                await fetch(`http://localhost:3000/api/payments/updatePayment/${params.id}`, {
                method: "post",
                body: JSON.stringify(updatePayment),
                headers: {
                'Content-Type': 'application/json'
                },
            });
  
            navigate("/payments");
            }
          
            

            
        }    

    return(
        <div className="container">
            <center><p style={{fontSize: "30px"}}>Update Payment</p></center><br/>
           <form onSubmit={sendData}>
            <fieldset style={{backgroundColor:"#D5D8DC", padding:"30px", borderRadius:"20px"}}>
           <div className="form-group">
                <label htmlFor="paymentID">New Payment ID</label>
                <input type="text" className="form-control" id="paymentID" placeholder="Enter correct Payment ID" onChange={(e) =>{
                    updatePaymentID(e.target.value);
                }} />
                
            </div>
            <div className="form-group">
                <label htmlFor="paymentDescription">New Payment Description</label>
                <input type="text" className="form-control" id="paymentDescription" placeholder="Enter correct Payment Description" onChange={(e) =>{
                    updateDescription(e.target.value);
                }} />
                
            </div>
            <div className="form-group">
                <label htmlFor="category">New Payment Category</label>
                <input type="text" className="form-control" id="category" placeholder="Enter correct Payment Category" onChange={(e) =>{
                    updateCategory(e.target.value);
                }} />
                
            </div>

            <div className="form-group">
                <label htmlFor="date">New Payment Date</label>
                <input type="Date" className="form-control" id="date" placeholder="Enter correct Payment Date" onChange={(e) =>{
                    updateDate(e.target.value);
                }}  />
                
            </div>

            <div className="form-group">
                <label htmlFor="amount">New Payment Amount</label>
                <input type="number" className="form-control" id="amount" placeholder="Enter correct Payment Amount" onChange={(e) =>{
                    updateAmount(e.target.value);
                }} />
                
            </div>
            
            
            </fieldset><br/>
            <center><button type="submit" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Submit</button>
            <button class="text-white bg-white-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#0277BD] dark:hover:bg-[#1565C0] focus:outline-none dark:focus:ring-blue-800"><a href='/payments'>Cancel</a></button></center>
            </form> 
        </div>
    )
}
