import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config';

firebase.initializeApp(config.firebaseConfig);
const db = firebase.firestore();

const embedCode = (id) => (`
  <!-- Create mount point -->
  <div id="mountPoint"></div>

  <!-- Get script -->
  <script src="https://create-your-own-adventure-video-maker-v1.s3-ap-southeast-1.amazonaws.com/embed.js"></script>

  <!-- Initialize -->
  <script>
    IVideo.embed("${id}", document.getElementById('mountPoint'))
  </script>
`);

const handleViewVideo = (data) => {
  db.collection(config.collection).add(data)
    .then((docRef) => {
      // eslint-disable-next-line no-console
      console.log('Document written with ID: ', docRef.id);
      return docRef.id;
    })
    .then((id) => embedCode(id))
    // eslint-disable-next-line no-alert
    .catch((error) => alert('Error adding document: ', error));
};

export default handleViewVideo;
