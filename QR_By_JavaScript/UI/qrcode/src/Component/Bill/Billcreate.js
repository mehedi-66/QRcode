import React, { useState } from "react";
import './Billcreate.css';
import Billnav from "./Billnav";

function Billcreate() {

    const [TableInputData, setTableInputData] = useState({
        CompanyName: 'A',
        Unit: 'AB',
        BillNo: 'H2',
        RefNo: '2222',
        LCNo: '3333',
        Invoice: '444',
        BillofIMNo: '5555',
        IMDate: '1/2/2024',
        BillofExNo: '',
        ExDate: '',
        DivDate: '15/02/2024',
        Cartoon: '12',
        KGS: '777.9',
        Vat: '19292',
        PortHandlingIM: '700',
        PortHandlingEX: '',
        Association: '210',
        Photocopy: '50',
        Transport: '',
        Part: '0',
        PartCost: '300',
        LoadingandUnloadingCost: '10'
    });

    const handleServiceBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        const newEnrollment = { ...TableInputData };
        newEnrollment[field] = value;
        console.log(newEnrollment);
        setTableInputData(newEnrollment);
    };

    let InputListDaynamic = [
        { CompanyName: 'Company' },
        { Unit: 'Unit' },
        { BillNo: 'Bill No' },
        { RefNo: 'Ref' },
        { LCNo: 'LC' },
        { Invoice: 'Invoice' },
        { BillofIMNo: 'Bill of IM No' },
        { IMDate: 'Date IM' },
        { BillofExNo: 'Bill of EX No' },
        { ExDate: 'Date Ex' },
        { DivDate: 'Dlv Date' },
        { Cartoon: 'Cartoon' },
        { KGS: 'KGS' },
        { Vat: 'Vat' },
        { PortHandlingIM: 'IM-7' },
        { PortHandlingEX: 'Ex-1' },
        { Association: 'Association' },
        { Photocopy: 'Photocopy' },
        { Transport: 'Transport ' },
        { Part: 'Part' },
        { PartCost: 'PartCost' },
        { LoadingandUnloadingCost: 'L & U Cost' },
    ]

    return (

        <div className="d-flex">
            <div className="leftNav">
                <Billnav></Billnav>
            </div>
            <div className="contentMain d-flex">
                <div className="tableSide">
                    <div>


                        <div className="billHeading">
                            <p className="text-center"> {TableInputData.CompanyName}</p>
                            <p className="text-center"> Unit: {TableInputData.Unit} </p>
                            <p className="text-end"> Bill No: {TableInputData.BillNo}</p>

                        </div>


                    </div>
                    <table id="myTable">

                        <tr>
                            <td>A</td>
                            <td>REF No </td>
                            <td> {TableInputData.RefNo}</td>
                            <td>Unit</td>
                            <td></td>
                            <td>L/C No:</td>
                            <td>{TableInputData.LCNo}</td>
                            <td>Invoice</td>
                            <td>{TableInputData.Invoice}</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td colspan="2">Bill of Entry No-IM-7:</td>
                            <td>{TableInputData.BillofIMNo}</td>
                            <td> Date</td>
                            <td>{TableInputData.IMDate}</td>
                            <td> Delivery Date</td>
                            <td colspan="3"> {TableInputData.DivDate}</td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td colspan="2">Shipping Bill No EX 1: </td>
                            <td>{TableInputData.BillofExNo}</td>
                            <td> Date</td>
                            <td>{TableInputData.ExDate}</td>

                        </tr>
                        <tr>
                            <td> D</td>
                            <td> carton</td>
                            <td>{TableInputData.Cartoon} </td>
                            <td> KGS</td>
                            <td>{TableInputData.KGS}</td>
                        </tr>
                    </table>

                    <table id="myTable">
                        <th>SL</th>
                        <th> Purpose</th>
                        <th colspan="2"> </th>
                        <tr>
                            <td>1</td>
                            <td>VAT</td>
                            <td>TK</td>
                            <td>{TableInputData.Vat}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Miscellaneous of Customs and Port Handling IM-7</td>
                            <td>TK</td>
                            <td>{TableInputData.PortHandlingIM}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Miscellaneous of Customs and Port Handling EX-1</td>
                            <td>TK</td>
                            <td>{TableInputData.PortHandlingEX}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Association + Photocopy  (<span>{TableInputData.Association}</span> + <span>{TableInputData.Photocopy}</span> )</td>
                            <td>TK</td>
                            <td>{TableInputData.Association + TableInputData.Photocopy}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Transport  </td>
                            <td>TK</td>
                            <td>{TableInputData.Transport}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Part Delivery    <span className="mx-3"></span> <span>{TableInputData.Part}</span> X <span>{TableInputData.PartCost}</span>  </td>
                            <td>TK</td>
                            <td>{TableInputData.Part * TableInputData.PartCost} </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Loading and Unloading <span className="mx-3"></span> <span>{TableInputData.Cartoon}</span> X <span>{TableInputData.LoadingandUnloadingCost}</span></td>
                            <td>TK</td>
                            <td>{TableInputData.Cartoon * TableInputData.LoadingandUnloadingCost}</td>
                        </tr>
                        <tr>
                            <td colspan="2">Total Amount</td>

                            <td>TK</td>
                            <td>Cal fix</td>
                        </tr>



                    </table>
                </div>
                <div className="tableInput">
                    <h6>Input Area: </h6>
                    <table id="myTableInput">
                        {
                            InputListDaynamic.map((e, index) =>
                                <tr key={index}>
                                    {Object.entries(e).map(([key, value]) =>
                                        <React.Fragment key={key}>
                                            <td className="f14">{value}</td>
                                            <td>
                                                <input
                                                    className="inputForTable"
                                                    onChange={handleServiceBlur}
                                                    type="text"
                                                    value={TableInputData[key]} 
                                                    name={key}
                                                    placeholder="Text"
                                                    required
                                                />
                                            </td>
                                        </React.Fragment>
                                    )}
                                </tr>
                            )
                        }


                    </table>
                </div>
            </div>
        </div>

    );
}

export default Billcreate;
