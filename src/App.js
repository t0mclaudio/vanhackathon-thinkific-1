import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Create from './Create';
import View from './View';

import firebase from 'firebase';
import config from '../config';

firebase.initializeApp(config.firebaseConfig);

const db = firebase.firestore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      embedCode: ""
    }
  }

  handleViewVideo(data) {
    this.setState({data: data})
    db.collection(config.collection).add(data)
    .then(docRef => { 
       console.log("Document written with ID: ", docRef.id);
       return docRef.id 
    })
    .then(id => {
      let embedCode = 
      `
      <!-- Create mount point -->
      <div id="mountPoint"></div>
  
      <!-- Get script -->
      <script src="assets/embed.js"></script>
  
      <!-- Initialize -->
      <script>
        IVideo.embed("${id}", document.getElementById('mountPoint'))
      </script>
      `
      this.setState({embedCode: embedCode})
    })
    .catch(error => console.error("Error adding document: ", error))
    
  }

  saveToDb() {
    
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Create handleViewVideo={data => this.handleViewVideo(data)} />
          </Route>
          <Route exact path="/view">
            <View data={this.state.data} embedCode={this.state.embedCode} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

