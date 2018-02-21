import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Icon } from "semantic-ui-react";
import Layout from '../components/layout'
import { Link } from '../routes'

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <Link route={`/campaigns/${address}`}><a>View campaign</a></Link>,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
      <div>
        <h2>Open Campaigns</h2>
        <Link route="/campaigns/new">
        <a>
        <Button floated="right" animated primary={true}>
          <Button.Content visible>Create Campaign</Button.Content>
          <Button.Content hidden>
            <Icon name="add circle" />
          </Button.Content>
        </Button>
        </a>
        </Link>
        {this.renderCampaigns()}
      </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
