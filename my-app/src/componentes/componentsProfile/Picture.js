import React from "react";
import firebase from '../../config/firebase';
import FileUploader from "react-firebase-file-uploader";
import './profile.css';
import {Row, Col} from 'react-materialize';

// const storage = firebase.storage().ref()

class ProfilePage extends React.Component {
  constructor(){
    super()
  this.state = {
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  }
  // this.getImage('avatarURL')
}

/* getImage (image) {
  let { state } = this
  storage.child(`${image}.png`).getDownloadURL().then((url) => {
    state[image] = url
    this.setState(state)
  }).catch((error) => {
    // Handle any errors
  })
} */
  handleChangeUsername = event =>
    this.setState({ username: event.target.value });

  handleChangeAboutMe = event =>
  this.setState({ aboutMe: event.target.value });

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <div>
      <Row>
        <Col>
        <form>
          {this.state.isUploading && 
          <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img alt="" src={this.state.avatarURL} className="up"/>}
          <label className="label">
          Choose folder
            <FileUploader
              hidden
              accept="image/*"
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
        </form>
        </Col>
      </Row>
      </div>
    );
  }
}

export default ProfilePage;