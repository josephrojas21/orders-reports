import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, connect } from 'react-redux';
import DataReports from './services/data'
import Report from './components/report/index'
import Export from './components/export/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
      dataTable: {},
      isData: false,      
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }


  componentDidMount() {
    console.log('inicio de petición');
    DataReports.getData().then(data =>{              
        this.setState({
            dataTable: data,
            isData: true           
        })        
      
        console.log('TABLA', this.state.dataTable);
    })
}

  render() {

    const {store,globalEventDistributor,isData,dataTable} = this.state
 
    return (
      <div className="container-fluid">
        {store && globalEventDistributor ?
          <Provider store={store}>
            <div className="row">
              <div className="col-12" id="searchComp"> 
               {isData ? <Export dataTable={dataTable}/>: <h1></h1>}  
               {isData ? <Report dataTable={dataTable}/>: <h1>No ha cargado el reporte</h1>}           
             </div>
            </div>
          </Provider> :
          <div>EL store no ha sido iniciado </div>
        }
      </div>
    )
  }

}

export default App;
