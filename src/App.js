import React from 'react'
import './App.css';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import ReactEcharts from 'echarts-for-react'
 


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      columnDefs:[
        {headerName: 'Class' , field: 'class' , checkboxSelection: true},
        {headerName: 'Number' , field: 'number'},
        {headerName: 'Specialization' , field: 'specialization'},
        {headerName: 'Promoted' , field: 'promoted'},
      ] , 
      rowData: [
        {class: '1ere' , number: 15 , specialization: 'info' , promoted: 'yes'} ,
        {class: '2eme' , number: 27 , specialization: 'indus' , promoted: 'no'} ,
        {class: '3ere' , number: 10 , specialization: 'elctro' , promoted: 'no'} ,
        {class: '4ere' , number: 13 , specialization: 'meca' , promoted: 'yes'} , 
        {class: '5ere' , number: 9 , specialization: 'info' , promoted: 'maybe'} ,
      ],
      defaultColDef: {
        sortable: true,
      },
      rowSelection: 'multiple',
      options : {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      }
    }
    
  }
  
  render(){
    return (

        <div className = 'ag-theme-alpine' style = {{width :300 , height:500 }}>hello world
           {/* <AgGridReact
            columnDefs = {this.state.columnDefs}
            rowData = {this.state.rowData}
            defaultColDef = {this.state.defaultColDef}
            rowSelection={this.state.rowSelection}
            /> */}
            <ReactEcharts option={this.state.options} />
        </div>
        
    );
  }
}
export default App;