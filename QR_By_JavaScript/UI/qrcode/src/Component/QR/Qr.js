import React, { useState } from "react";
import axios from 'axios';
import {saveAs} from 'file-saver';
import './Qr.css';


function Qr() {

  let baseUrl = 5000; 
  // baseUrl = 84;
  const [reportData, setReportData] = useState({});

  const handleAddEnrollment = (event) => {
    event.preventDefault();

    console.log(event.target.value);
    axios.post(`http://localhost:${baseUrl}/create-pdf`, reportData)
      .then(() => axios.get(`http://localhost:${baseUrl}/fetch-pdf`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        console.log(pdfBlob);
        saveAs(pdfBlob, 'newPdf.pdf');
      })

    
  };

  const createAndDownloadPdf = () => {
    axios.post(`http://localhost:${baseUrl}/create-pdf`, reportData)
      .then(() => axios.get(`http://localhost:${baseUrl}/fetch-pdf`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        console.log(pdfBlob);
        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }
  const createAndOpenPdf = () => {
    axios.post(`http://localhost:${baseUrl}/create-pdf`, reportData)
      .then(() => axios.get(`http://localhost:${baseUrl}/fetch-pdf`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
       // Create a URL for the Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Open the PDF in a new tab
      const newTab = window.open();
      newTab.location.href = pdfUrl;
      })
  }

  const handleServiceBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;

    const newEnrollment = { ...reportData };
    newEnrollment[field] = value;
    console.log(newEnrollment);
    setReportData(newEnrollment);
  };

  return (
    <div className="Qr">
     <form onSubmit={handleAddEnrollment} className="mb-3" style={{width:"100%"}}>
         
         <div className="row">
           <div className="from-control col-4 mb-3">
             <label>QR Text</label>
             <input
               className="form-control"
               onBlur={handleServiceBlur}
               type="text"
               name="QRText"
               placeholder="Text"
               required
             />
           </div>
           <div className="from-control col-4 mb-3">
             <label>QR Start Number</label>
             <input
               className="form-control"
               onBlur={handleServiceBlur}
               type="number"
               name="QRStart"
               placeholder="Start"
               required
             />
           </div>
           <div className="from-control col-4 mb-3">
             <label>QR END Number</label>
             <input
               className="form-control"
               onBlur={handleServiceBlur}
               type="number"
               name="QREnd"
               placeholder="End"
               required
             />
           </div>
           <div className="from-control col-4 mb-3">
             <label>QR Date</label>
             <input
               className="form-control"
               onBlur={handleServiceBlur}
               type="date"
               name="QRDate"
               required
             />
           </div>
           <div className="from-control col-4 mb-3">
             <label>QR Time Start</label>
             <input
               className="form-control"
               onBlur={handleServiceBlur}
               type="time"
               name="QRTime"
               required
             />
           </div>
           <div className="from-control col-4 mb-3">
             <label>QR Time Inc By</label>
             <input
               className="form-control"
               onBlur={handleServiceBlur}
               type="number"
               name="QRTimeInc"
               placeholder="Inc"
               required
             />
           </div>
           {/* <div className="col-4 mb-3">
             <label>Select Type</label>
             <select
               className="form-control"
               onBlur={handleServiceBlur}
               name="status"
               required
             >
               <option value="" selected disabled>
                 select
               </option>
               <option value="All">All</option>
               <option value="Accepted">Accepted</option>
               <option value="Onboard">Onboard</option>
               <option value="Rejected">Rejected</option>
             </select>
           </div> */}
           <div className="d-flex justify-content-center">
      
           </div>
           
         </div>
        
        
       </form>

       <div className="d-flex justify-content-end">
              <button className="btn btn-sm btn-success" onClick={createAndDownloadPdf}>Download Pdf</button>
      </div>

    </div>
  );
}

export default Qr;
