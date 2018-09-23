import React, { Component } from "react";
import firebase from '../../config/firebase';
import FileUploader from "react-firebase-file-uploader";
import './profile.css';
import {Row, Col} from 'react-materialize';

class ProfilePage extends Component {
  state = {
    username: "",
    aboutMe:"",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

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
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <label className="label">
          Choose your profile picture
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
          <Col>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
            storageRef={firebase.storage().ref('images')}
          />
           <label>About me:</label>
          <input
            type="text"
            value={this.state.aboutMe}
            name="aboutMe"
            onChange={this.handleChangeAboutMe}
            storageRef={firebase.storage().ref('images')}
          />
          </Col>
        </form>
        </Col>
      </Row>
      </div>
    );
  }
}

export default ProfilePage;
/* import './profile.css';

const Picture = (props) => {
  return (
    <div className="body">
    <img src= {props.photo} alt='' className="picture" />
    </div>
  );
};

export default Picture; */