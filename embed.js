import React from 'react';
import ReactDOM from 'react-dom';
import View from './src/View';
import firebase from 'firebase';

import config from './config';

firebase.initializeApp(config.firebaseConfig);

const db = firebase.firestore();

export default {
  embed: (id, el) => {
    db.collection(config.collection).doc(id).get().then(doc => {
      return doc.data()
    }).then(data => {
      ReactDOM.render(<View data={data} />, el);
    })
  }
}