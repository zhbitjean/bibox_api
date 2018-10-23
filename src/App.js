import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
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
            Table
        </div>
        
      );
    }

    
  }
}

export default App;
