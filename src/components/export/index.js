import React, { Component } from 'react';
import { MDBBtn, MDBCollapse } from "mdbreact";
import './export.css';
import exportFromJSON from 'export-from-json'

class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: {},
            runexport: false
        }
    }



    render() {
        const { dataTable } = this.props;
        const { runexport } = this.state;
        console.log('Asi llegó al componente a exportar', dataTable);
        return (
            <MDBBtn
                color="primary"
                variant="primary"
                className="StyleButton"
                onClick={this.ExportJsonToExcel}
                style={{ marginBottom: "1rem" }}
            >  Exportar  </MDBBtn>

        )
    }



    ExportJsonToExcel() {

       // const { dataTable } = this.props;
        const data = '[{"foo":"foo"},{"bar":"bar"}]'
        const fileName = 'Reporte-OrdenesPendientes'
        const exportType = 'xls'
         
        exportFromJSON({ data, fileName, exportType })

        //  if  (this.state.runexport)  {
        console.log('Entróeadsdsa');
        //  }     
    }

}

export default Export;