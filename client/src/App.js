import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      images: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    fetch('/api/images', {
        method: 'POST',
        headers: {'Content-Type':'multipart/form-data'},
        body: new FormData(document.getElementById('addPhoto'))
    }).then((response) => response.json())
    .then((data)=>{
        this.setState({images: data.images});
    })

  }
  render(){
    return (
      <div className="App">
        <h1>Care Portal</h1>
        <form action="/api/images" method="post" enctype="multipart/form-data" id="addPhoto"> 
          <input type="file" name="image" />
          <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
        </form>
      </div>
    );
  }
}

export default App;