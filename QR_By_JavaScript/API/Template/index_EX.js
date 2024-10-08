module.exports = (data) => {
    console.log(data);
     const today = new Date();
     return `<!doctype html>
     <html>
        <head>
           <meta charset="utf-8">
           <title>PDF Result Template</title>
           <style>
           html {
            zoom: 1.26;
            }
              .invoice-box {
              max-width: 920px;
              margin: auto;
              padding: 10px;
              /* border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15); */
              font-size: 14x;
              line-height: 14px;
              font-family: 'Calibri', ' sans-serif';
             /* color: #555; */
              }
              .margin-top {
              margin-top: 10px;
              }
              .justify-center {
              text-align: center;
              }
              .invoice-box table {
              width: 100%;
              line-height: inherit;
              text-align: left;
              }
              .invoice-box table td {
              padding: 3px;
              vertical-align: top;
              }
              .invoice-box table tr td:nth-child(2) {
              /* text-align: right; */
              }
              .invoice-box table tr.top table td {
              padding-bottom: 10px;
              }
              .invoice-box table tr.top table td.title {
              font-size: 120px;
              line-height: 20px;
              color: #333;
              }
              .invoice-box table tr.information table td {
              padding-bottom: 20px;
              }
              .invoice-box table tr.heading td {
              background: #eee;
              border-bottom: 1px solid #ddd;
              font-weight: bold;
              }
              .invoice-box table tr.details td {
              padding-bottom: 20px;
              }
              .invoice-box table tr.item td {
              border-bottom: 1px solid #eee;
              }
              .invoice-box table tr.item.last td {
              border-bottom: none;
              }
              .invoice-box table tr.total td:nth-child(2) {
              border-top: 2px solid #eee;
              font-weight: bold;
              }
              @media only screen and (max-width: 600px) {
              .invoice-box table tr.top table td {
              width: 100%;
              display: block;
              text-align: center;
              }
              .invoice-box table tr.information table td {
              width: 100%;
              display: block;
              text-align: center;
              }
              }
 
              #myTable {
                border-collapse: collapse; 
                border: 1px solid black; 
            }
            
            #myTable th, #myTable td {
                border: 1px solid black; 
                padding: 5px; 
            }
            .f10{
               font-size: 13px;
            }
            .f11{
               font-size: 13px;
            }
            .f12{
               font-size: 13px;
            }
            .f13{
               font-size: 13px;
            }
            .f14{
               font-size: 14px;
            }
            .f15{
               font-size: 15px;
            }
            .f16{
               font-size: 16px;
            }
            .tLeft{
                text-align: left;
            }
            .tRight{
                text-align: right;
            }
            .tCenter{
                text-align: center;
            }
            .headerOfReceit{
               /* margin-bottom: -43px; */
               display: flex;
           }
           .htop{
               font-size: 26px;
               font-weight: 500;
               font-family: 'Calibri', ' sans-serif';
           }
           .hmid{
               font-size: 16px;
               font-weight: 500;
               font-family: 'Calibri', ' sans-serif';
           }
           .hbttm{
                font-size: 26px;
               font-weight: 500;
               font-family: 'Calibri', ' sans-serif';
           }
           .rotateImg{
            transform: rotate(5deg);
           }
           </style>
        </head>
        <body>
        ${data.map(el => `
           <div class="invoice-box" style="margin-bottom: 159px;">

           <table>

            <tr>
                <td> <div style="width: 100px;">
                <img class="rotateImg"  src="http://localhost:5000/static/leftLogo.jpg"
                style="width:100%; max-width:92px; max-height: 72px; margin: -13px 0px 0px 48px;">
             </div></td>
                <td colspan="2" class="tCenter"><div style="width: 100%; margin:  0px 0px 0px 0px;">
                <h2 class="htop" style="text-align: center; margin: 0px 0px 13px 0px;"> Dhaka Customs Agents Association </h2>
  
                <h5 class="hmid" style="text-align: center; margin: 0px 0px 0px 0px;"> 3/C New Baily  Road, Ramna, Dhaka </h5>
     
                <h3 class="hbttm" style="text-align: center; margin: 10px 0px;"> Money Receipt </h3>
             </div></td>
                <td> <div style="width: 100px;">
                <img  src="http://localhost:5000/static/${el.QRText}.png"
               style="width: 100%; max-width: 80px; max-height: 90px; margin: -18px 0px 0px 0px;">
            </div> </td>
               
            </tr>
            </table>
          
           
            <table id="myTable" style="table-layout: fixed;margin: -4px 0px 0px 0px;">
 
          
     
            <tr>
                <td style="width: 76px;">MR No</td>
                <td colspan="3" class="tCenter" style="width: 127px; padding-bottom: 11px;"> ${el.QRText}</td>
                <td style="width: 66px;">User Id</td>
                <td class="tCenter" style="width: 53px;">tasiqul</td>
                <td class="f10 tCenter" style="width: 62px; padding: 1px">MR Date</td>
                <td colspan="2"class="f10 tCenter" style="padding: 1px">${el.QRDate} ${el.QRTime} AM</td>
                <td class="f10 tCenter" style="padding: 1px">Print Date</td>
                <td colspan="2"  class="f10 tCenter" style="padding: 1px">${el.QRDate} ${el.QRTime} AM</td>
            </tr>
            <tr>
                 <td>AIN</td>
                 <td colspan="3" class="tLeft">101231937</td>
                 <td class="tCenter">Company</td>
                 <td colspan="7" class="tLeft">HA-MEEM DESIGN LTD</td>
             </tr>
           
             <tr>
                 <td width="15%">B/E Type</td>
                 <td width="100">${el.QRTextOnly}</td>
                 <td colspan="2">B/E No</td>
                 <td colspan="2" width="20%" class="tLeft">null</td>
                 <td width="10%" class="f14">AWB/EXP</td>
                 <td colspan="2" width="10%"></td>
                 <td width="5%" class="tRight">CPS</td>
                 <td colspan="2" width="20%" class="tRight">null</td>
             </tr>
            
             <tr>
                 <td width="15%">No of Item</td>
                 <td width="2%">1</td>
                 <td colspan="2" class="f14" >Service Type</td>
                 <td colspan="3" width="20%" class="tCenter">MultiItemDataEntryService</td>
                 <td width="10%" class="f13">Print Crg</td>
                 <td width="10%" class="tRight">0.00</td>
                 <td width="10%" class="f13 tRight">DTI Crg.</td>
                 <td colspan="2" width="35%" class="tRight">20.00</td>
             </tr>
         
             
             <tr>
                 <td style="font-size: 13px;">Welfare Fund</td>
                 <td colspan="3" class="tRight">80.00</td>
                 <td>Grants</td>
                 <td colspan="2" class="tRight">0.00</td>
                 <td>Sample</td>
                 <td class="tRight">0.00</td>
                 <td class="tRight">Total</td>
                 <td colspan="2" class="tRight">100.00</td>
             </tr>
             
             <tr>
                 <td>In words</td>
                 <td style ="width: 100px" colspan="6" class="tLeft">One Hundred Zero taka only</td>
                 <td colspan="2" class="tRight">Representative</td>
                 <td colspan="3"></td>
                
             </tr>
             <tr>
                 <td>Importer</td>
                 <td colspan="4"></td>
                 <td class="f14 tLeft">Remarks</td>
                 <td colspan="6"></td>
             </tr>
       
     
         </table>
         <p style="font-size: 1; font-weight: bold; padding-right: 40px; margin-top: 30px; margin-bottom: 40px;" class="f10 tRight">It's Computer generated Money Receipt, so no need to Signature</p>
         <div>
            <img  src="http://localhost:5000/static/bttmLogo.jpg"
           style="display: block;  margin-left: auto; max-width: 304px; max-height: 90px; margin-right: -43px;">
        </div> 
          </div>
       `).join('')}
        </body>
     </html>`
 };


 