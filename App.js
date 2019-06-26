import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './component/message'
import Form from './component/form'
import Header from './component/header'
import View from './component/view-rating'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <View />
      </div>
      );
  }
}

export default App;
