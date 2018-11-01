import React, {Component} from 'react';

class DataGrid extends Component {
  constructor(props, context) {
    super(props, context);
    //this.createRows();
    // this._columns = [
    //   { key: 'id', name: 'ID' },
    //   { key: 'Close', name: 'Close' },
    //   { key: 'High', name: 'High' } ,
    //   { key: 'Low', name: 'Low' } ,
    //   { key: 'Open', name: 'Open' } ,
    //   { key: 'Volume', name: 'Volume' } ,
    //   { key: 'date', name: 'date' } ,
    //   { key: 'mean_volume', name: 'mean_volume' } 
    //   ];

    this.state = {
      items: this.props.items,
      isLoaded: this.props.isLoaded,
    }
  }

  render() {

    const { isLoaded, items } = this.state;
    
    let symbol_data = items['data']

    // for (let key in symbol_data) {
    //     console.log("date", symbol_data[key].date);
    // }
    return  (
      <React.Fragment>
        <h1>DataGrid</h1>
        <table  class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">date</th>
              <th scope="col">Close</th>
              <th scope="col">High</th>
              <th scope="col">Low</th>
              <th scope="col">Open</th>
              <th scope="col">Volumn</th>
              <th scope="col">mean_volume</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(symbol_data).map(key=>(
              <tr>
                <th scope="row">{key}</th>
                <th scope="row">{Date(symbol_data[key].date)}</th>
                <th scope="row">{symbol_data[key].Close}</th>
                <th scope="row">{symbol_data[key].High}</th>
                <th scope="row">{symbol_data[key].Low}</th>
                <th scope="row">{symbol_data[key].Open}</th>
                <th scope="row">{symbol_data[key].Volumn}</th>
                <th scope="row">{symbol_data[key].mean_volume}</th>
              </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
      );
    }
  }

export default DataGrid;

// module.exports = exampleWrapper({
//   WrappedComponent: DataGrid,
//   exampleName: 'Basic DataGrid',
//   exampleDescription: 'A display only grid.',
//   examplePath: './scripts/example01-basic.js',
//   examplePlaygroundLink: 'https://jsfiddle.net/f6mbnb8z/1/'
// });

