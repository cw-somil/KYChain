import { Segment, Button, Divider } from 'semantic-ui-react';
import { Router } from '../routes';
import React, { Component } from 'react';
import Layout from '../components/Layout';
import request from 'superagent';
import { Container, Input } from 'semantic-ui-react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {

  ViewDetails = () => {
    Router.pushRoute('/index2');
  }

  render() {
    return (
      <Layout sty>
      <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <a className="navbar-brand" href="#">
            <img src="kyc-chain-logo-260x.png" width="180" height="100" alt="KY Logo" />
            KY-CHAIN
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>

          </div>
        </nav> */}
        <br/><br/>
        <div className="container">
          <div className="row">
            <div className="col">
            <h1 style={{"font-size":"100px","font-family": "Chakra Petch"}}>KYChain</h1>
            <h3 style={{"font-size":"30px","font-family": "Merriweather"}}>Blockchain as a service.</h3>
            <h4 style={{"font-size":"21px","font-family": "Merriweather"}}>Smart alternative to traditional KYC methods.</h4>
            <br /><br/>

            <Button color="violet"  onClick={this.ViewDetails}>Upload Details</Button>
            </div>
            <div className="col">
              <img className="vc_single_image-img" width="500" height="400" src="https://selfkey.org/assets/images/svgs/kyc-animation.svg" pagespeed_url_hash="3674293370" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
            </div>
          </div>
        </div>
      </div>
      </Layout>

      // <div>
      // <form>

      //   <div style={{marginLeft:460,marginTop:50,marginBottom:50}}>
      //     <Dropzone
      //       onDrop={this.onImageDrop.bind(this)}
      //       multiple={false}
      //       accept="image/*">
      //       <div>Drop an image or click to select a file to upload.</div>
      //     </Dropzone>
      //   </div>
      //    <div>
      //     {this.state.uploadedFileCloudinaryUrl === '' ? null :
      //     <div>
      //       <p>{this.state.uploadedFile.name}</p>
      //       <img src={this.state.uploadedFileCloudinaryUrl} />
      //     </div>}

      //   </div>

      // </form>

      // <Divider horizontal> Or </Divider>
      // <div>


      // <Button secondary onClick={this.ViewDetails} style={{marginLeft:490}}>View your Details</Button>

      // </div>
      // </div>

    );

  }
}
