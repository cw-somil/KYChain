import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import kyc from '../../ethereum/kyc';
import web3 from '../../ethereum/web3';
import {Input, Button,Header,Segment} from 'semantic-ui-react';

import Kyc from '../../ethereum/build/Kyc.json';


class ViewUser extends Component {
  state= {
    address: '',
    name: '',
    user_address: '',
    age:'',
    user_gender: '',
    link: '',
    visible: 'None'
  };

  static async getInitialProps(props) {

    return {};
  }
  onChangeAddress = event => {
    event.preventDefault();
    this.setState({address: event.target.value});

  }

  getDetails = async event => {
    event.preventDefault();
    const contract_kyc = new web3.eth.Contract(JSON.parse(Kyc.interface),this.state.address);
    console.log(contract_kyc);
    // const user = kyc(this.state.address);
  //  console.log(kyc.methods.viewdetails().call());
    // console.log(user);
    // //0x22251074773443c7ddb58ECB996Cd2546BC89A87
    // 0xaE107dD543F2CAb1E57E1F1570B5cf2b65b7A688

    const details = await contract_kyc.methods.viewdetails().call({
      from: '0x349d08c5cc6f28e4e393ef0f46308d39630831cf'
    });
    console.log(details);
    const user_name = details[0];
    const useraddress = details[1];
    const user_age = details[2];
    const gender = details[3];
    const imagelink = details[4];
    this.setState({name:user_name,user_address:useraddress,age:user_age,user_gender:gender,link:imagelink,visible:'show'});


    console.log(user_name);
    // console.log(kyc.methods.viewdetails().call());
    // this.setState({name:user_name, user_address: useraddress,age:user_age,})

  }

  render() {
    return (
      <Layout >
      <br/>
      <div style={{marginLeft:"50px",marginRight:"50px"}}>

        <h3>Your Details</h3>
        <div style={{marginBottom:30}}>
        <form onSubmit={this.getDetails}>
        <Input style={{marginRight:20, width:"300px"}} value={this.state.address} onChange={this.onChangeAddress} placeholder='Type your contract address..'></Input>
        <Button type='submit' secondary>Go!</Button>
        </form>
        </div>
<div style={{marginBottom:200,display:this.state.visible==='show'? 'block' : 'None'}}>
        <Header as='h3' attached='top'>
      Name
    </Header>
    <Segment attached>
      {this.state.name}
    </Segment>
    <Header as='h3' attached='top'>
Address
</Header>
<Segment attached>
  {this.state.user_address}
</Segment>
<Header as='h3' attached='top'>
Age
</Header>
<Segment attached>
{this.state.age}
</Segment>
<Header as='h3' attached='top'>
Gender
</Header>
<Segment attached>
{this.state.user_gender}
</Segment>
<Header as='h3' attached='top'>
Photograph Link
</Header>
<Segment attached>
{this.state.link}
</Segment>
</div>
</div>
      </Layout>
    );
  }
}

export default ViewUser;
