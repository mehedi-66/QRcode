import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, GridColumn as Column, GridToolbar  } from "@progress/kendo-react-grid";
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { filterBy } from "@progress/kendo-data-query";
import axios from 'axios';
import Billnav from "./Billnav";
import './Billgrid.css';
import '@progress/kendo-theme-default/dist/all.css';
  const initialFilter = {
    logic: "and",
    filters: [
      // {
      //   field: "ProductName",
      //   operator: "contains",
      //   value: "Chef",
      // },
    ],
  };
function Billgrid() {

  let baseUrl = 5000;
  // baseUrl = 84;

  const [TableInputData, setTableInputData] = useState([]);
  const [filter, setFilter] = React.useState(initialFilter);
  // Excel export Start 
  const _export = React.useRef(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };
  //

  useEffect(() => {
    axios.get(`http://localhost:${baseUrl}/getNonAirBills`)
      .then(response => {
        console.log(response);
        setTableInputData(response.data);
        console.log(TableInputData);
      });
  }, [])

 
  const columnConfigs = [
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
    { LoadingandUnloadingCost: 'L & U Cost' }
  ];


  const columnsList = columnConfigs.map((config, index) => ({
    field: Object.keys(config)[0],
    title: config[Object.keys(config)[0]],
    width: '100px',
    key: index
  }));


  return (
    <div className="d-flex">
      <div className="leftNav">
        <Billnav></Billnav>
      </div>
      <div className="contentMain">
      <ExcelExport data={TableInputData} ref={_export}>
        <Grid
          style={{
            height: "90vh",
            width: "93%",
            margin: "0 auto",
          }}

          data={filterBy(TableInputData, filter)}
          filterable={true}
          filter={filter}
          onFilterChange={(e) => setFilter(e.filter)}
        >
          <GridToolbar>
          <button
            title="Export Excel"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={excelExport}
          >
            Export to Excel
          </button>
        </GridToolbar>
          <Column field="" title="Action" width="70px" >

          </Column>
          {columnsList.map(column => (
            <Column
              key={column.key}
              field={column.field}
              title={column.title}
              width={column.width}
            />
          ))}

        </Grid>
        </ExcelExport>
      </div>
    </div>
  );
}

export default Billgrid;