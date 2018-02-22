import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    errMsg: "",
    contribution: "",
    disabled: true,
    loading: false
  };

  validate = input => {
    const pattern = /[+-]?([0-9]*[.])?[0-9]+/g;
    pattern.test(input)
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errMsg: "" });
    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.contribution, "ether")
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errMsg: err.message });
    }
    this.setState({ loading: false, contribution: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errMsg}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.contribution}
            onChange={event => {
              this.setState({ contribution: event.target.value });
              this.validate(event.target.value);
            }}
          />
        </Form.Field>
        <Message error header="Opps!" content={this.state.errMsg} />
        <Button
          disabled={this.state.disabled}
          loading={this.state.loading}
          primary
        >
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
