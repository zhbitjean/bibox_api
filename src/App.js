import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataGrid from './components/datagrid';
import Chart from './components/chart';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  };

 
  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      symbolUrl = 'http://172.16.17.62:1507/symbol_list'
    const targetUrl = 'https://jsonplaceholder.typicode.com/users'

    //fetch(proxyUrl+targetUrl)
    fetch(symbolUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else{
      return (
        <div className="App">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ratio</th>
                <th scope="col">Cap</th>
                <th scope="col">Latest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{items['ratio']}</td>
                <td>{items['mark_price']}</td>
                <td>{items['latest_price']}</td>
              </tr>
            </tbody>
          </table>
          <Chart items={items} isLoaded={isLoaded}/>
          <main className='container'>
            <DataGrid items={items} isLoaded={isLoaded}/>
          </main>
        </div>
      );
    }

    
  }
}

export default App;
