// import React, { Component } from 'react';
// import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Segment, Button, Divider } from 'semantic-ui-react';
import { Router } from '../routes';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Container, Input } from 'semantic-ui-react'



// export default class ContactForm extends React.Component {
//
//   render() {

//   }

const CLOUDINARY_UPLOAD_PRESET = 'rrsgoxs8';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/diyzbbowc/image/upload';



export default class App extends React.Component {
    constructor(props) {
      super(props);
       this.state = {
        uploadedFile: null,
        uploadedFileCloudinaryUrl: '',


      };
    }

    // onChangeDetails = event => {
    //   event.preventDefault();
    //   this.setState({address:event.target.value});
    //
    // }
    // onSubmitView = event => {
    //   event.preventDefault();
    //
    // }

    ViewDetails = () => {
      Router.pushRoute('/kyc/show');
    }
     onImageDrop(files) {
      this.setState({
        uploadedFile: files[0]
      });
       this.handleImageUpload(files[0]);
    }
     handleImageUpload(file) {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);
       upload.end((err, response) => {
        if (err) {
          console.error(err);
        }
         if (response.body.secure_url !== '') {
          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        }
      });
      setTimeout(function() {
        alert("wait..");
      },500);
      Router.pushRoute('/kyc/new');
    }
     render() {
       console.log(this.state.address);
       console.log(this.state.uploadedFileCloudinaryUrl);
      return (
        <Layout>
        <div>
        <form>

          <div style={{marginLeft:460,marginTop:50,marginBottom:50}}>
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*">
              <div>Drop an image or click to select a file to upload.</div>
            </Dropzone>
          </div>
           <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}

          </div>

        </form>

        <Divider horizontal> Or </Divider>
        <div>
        <br />

        <Button color="violet" onClick={this.ViewDetails} style={{marginLeft:474}}>View your Details</Button>

        </div>
        </div>
        </Layout>
      );

      }
    }
