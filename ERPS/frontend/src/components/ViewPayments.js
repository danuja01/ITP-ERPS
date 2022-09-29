import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
      <td><center>{props.record.paymentID}</center></td>
      <td><center>{props.record.paymentDescription}</center></td>
      <td><center>{props.record.paymentCategory}</center></td>
      <td><center>{props.record.paymentDate}</center></td>
      <td><center>{props.record.paymentAmount}</center></td>
      

      
      
      <td>
      <button class="btn btn-warning"><Link  to={`/updatePayment/${props.record._id}`}>Edit</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-danger"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </button>
        
      </td>
    </tr>
  );

export default function RecordList() {
    const [records, setRecords] = useState([]);
  
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

  

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }


  
  return (
    <div>

      <br/>
       <img src="https://www.freewebheaders.com/wp-content/gallery/office-finance/online-business-and-accounting-website-header.jpg" style={{height:"200px",width:"100%"}} class="max-w-full h-auto rounded-lg"/><br/>
      <center><p style={{fontSize: "45px"}}>View Payments</p></center>
      
      <button type="button" class="text-blue-700 hover:text-brown border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-[#b9725d] dark:hover:text-white dark:hover:bg-[#b9725d] dark:focus:ring-[#b9725d]"><a href="/createPayment">Create Payment</a></button><br/><br/>
      
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
        <tbody>{recordList()}</tbody>
      </table>
      
      
    </div>
  );
}