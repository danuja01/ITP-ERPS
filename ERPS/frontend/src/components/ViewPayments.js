import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export default function RecordList() {
    const [records, setRecords] = useState([]);
    const [search,setsearch] = useState('');

    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:3000/api/payments/getPayments`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const records = await response.json();
        setRecords(records);
      }
  
      getRecords();
  
      return; 
    }, [records.length]);

     // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3000/api/payments/deletePayment/${id}`, {
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

 

  
  
  return (
    <div>

      <br/>
       <img src="https://www.freewebheaders.com/wp-content/gallery/office-finance/online-business-and-accounting-website-header.jpg" style={{height:"200px",width:"100%"}} class="max-w-full h-auto rounded-lg"/><br/>
      <center><p style={{fontSize: "45px"}}>View Payments</p></center><br/>
      
      
      
      <div style={{display : "flex",justifyContent:"space-around"}}>
        
        <div>
          <input
              className="form-control"
              type="search"
              placeholder="Search for Payments ..."
              name="searchQuery"
              onChange={(e)=>{setsearch(e.target.value);}} 
            ></input>
        </div>
        <div style={{marginLeft:"auto"}}><button type="button" class="focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:bg-[#b9725d] "><a href="/summaryPayment">Payment Summary</a></button></div>
        <div><button type="button" class="focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:bg-[#b9725d] "><a href="/createPayment">Create Payment</a></button></div>     
      </div><br/>
     
      <table class="table table-bordered">
        <thead>
        <tr class="table-info">
            <th><center>Payment ID</center></th>
            <th><center>Payment Description</center></th>
            <th><center>Payment Category</center></th>
            <th><center>Payment Date</center></th>
            <th><center>Payment Amount</center></th>
            <th><center>Action</center></th>
          </tr>
        </thead>
        <tbody>
          {records.filter(records=>{
            
            if (search==""){
              return records;
            }
            else if(records.paymentID.toLowerCase().includes(search.toLowerCase())
                    ||records.paymentDescription.toLowerCase().includes(search.toLowerCase())
                    ||records.paymentCategory.toLowerCase().includes(search.toLowerCase())){
              return records;
            }
          })
          .map((records)=>{
            return(
              <tr>
          
              <td><center>{records.paymentID}</center></td>
              <td><center>{records.paymentDescription}</center></td>
              <td><center>{records.paymentCategory}</center></td>
              <td><center>{records.paymentDate}</center></td>
              <td><center>{records.paymentAmount}</center></td>
            
              
              
          
      

      
      
      <td>
      <button class="btn btn-warning"><Link  to={`/updatePayment/${records._id}`}>Edit</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger"
          onClick={() => {
            deleteRecord(records._id);
          }}
        >
          Delete
        </button>
        
      </td>
    </tr>
            )

          })

          }
        
        </tbody>
        
     
      </table>
      
  
    </div>
    
  );
}