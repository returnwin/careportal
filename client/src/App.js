import React, { Component } from 'react';
import './App.css';
import donation from './json/donation.json';

import CareCard from './components/CareCard/CareCard';

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
  render() {
    return (
      <div className="App">
        <h1>Care Portal</h1>
        <form action="/api/images" method="post" enctype="multipart/form-data" id="addPhoto"> 
          <input type="file" name="image" />
          <button type="submit" onSubmit={this.handleSubmit}>SAVE</button>
        </form>
        <ul>
          <CareCard 
            donation={donation}
          />
          {/* <CareCard title={'Food in Round Rock'} description={'lorem ipsum'} />
          <CareCard title={'Bedframe in Round Rock'} description={'lorem ipsum'} /> */}
        </ul>
      </div>
    );
  }
}

export default App;
