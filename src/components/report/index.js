import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { MDBDataTable } from 'mdbreact';
import './report.css';
import {JsonToExcel} from 'react-json-excel';
import { MDBBtn, MDBCollapse } from "mdbreact";

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: {}
        }
    }

    render() {
        const { dataTable } = this.props;
        console.log('Asi llegó al componente', dataTable);
        return (
            <div>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    autoWidth
                    responsive
                    infoLabel={["Viendo", "desde", "hasta", "registros"]}
                    paginationLabel={["Anterior", "Siguiente"]}
                    entriesLabel="Mostrar registros"
                    searchLabel="Buscar"
                    exportToCSV
                    data={dataTable[0]}

                /></div>
        )
    }

}

export default Report;