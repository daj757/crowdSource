import React, { Component } from 'react';
import Layout from "../../components/layout";
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
class CampaignNew extends Component {
    state = {
        mininumContribution: '',
        errorMsg: '',
        message: '',
        disabled: true,
        loading: false
    }
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMsg: ''})
        try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.mininumContribution)
        .send({
            from: accounts[0]
        })
        Router.pushRoute('/')
        }
        catch(err){
            this.setState({errorMsg: err.message})
        }
        this.setState({loading: false})

    }
    validate =(input) => {
        const pattern = /^\d+$/g;
        pattern.test(input) ? this.setState({message: "", disabled: false}): this.setState({message: "Must be a number", disabled: true})
    }
    render() {
        return (
            <Layout>
        <h3>Create a campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
        <Form.Field>
        <label>Mininum Contribution</label>
        <Input label='wei' 
        labelPosition='right'
        value={this.state.mininumContribution}
        onChange={event => {this.setState({mininumContribution: event.target.value}); this.validate(event.target.value)}}
        />
        </Form.Field>
        <p style={{color: "red"}}>{this.state.message}</p>
        <Message error header="Opps!" content={this.state.errorMsg} />
        <Button disabled={this.state.disabled} loading={this.state.loading} primary>Create!</Button>
        </Form>
            </Layout>
        )
    }
}

export default CampaignNew;