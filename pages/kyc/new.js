import React, { Component } from 'react';
import { Form, Button, Input, Message, Header, Segment } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    name : 'JUHI SHAH',
    address: 'ARIHANT GOVIND NGR SOADAWALA LANE BORIVALI W MUMBAI',
    gender : 'F',
    age: '20',
    imagelink: '',
    errorMessage: '',
    loading: false
  };


  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    try {
      await factory.methods
        .createKyc(this.state.name,this.state.address,this.state.age,this.state.gender,this.state.imagelink)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });

    const deployedkyc = await factory.methods.getDeployedkyc().call();
    console.log(deployedkyc);
  };

  render() {

    return (

      <Layout>
        <h3 style={{marginLeft:"60px"}}>User Creation Page</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
    <div style={{marginLeft:"60px",marginRight:"60px"}}>
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
    {this.state.address}

    </Segment>
    <Header as='h3' attached='top'>
      Gender
    </Header>
    <Segment attached>
      {this.state.gender}
    </Segment>
    <Header as='h3' attached='top'>
      Age
    </Header>
    <Segment attached>
      {this.state.age}
    </Segment>

          <Form.Field style={{marginTop:"10px",marginBottom:"20px"}}>
            <label><h4>Image link</h4></label>
            <Input
              label="link"
              labelPosition="left"
              value={this.state.imagelink}
              onChange={event =>
                this.setState({ imagelink: event.target.value })}

            />
          </Form.Field>



          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} secondary>
            Create!
          </Button>
          </div>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
