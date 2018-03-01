import React, { Component } from "react";
import factory from "../ethereum/factory";
import {
  Card,
  Button,
  Icon,
  Container,
  Header,
  Responsive,
  Image
} from "semantic-ui-react";
import Layout from "../components/layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Container text>
          <Header
            as="h1"
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: ".99em",
              marginBottom: ".1em"
            }}
          >
            Crowd Coin <Image size="large" src="../static/crypto.png" />
          </Header>
          <Header
            as="h2"
            content="A crowd funding site with complete transparency. Built on the ethereum platform.
            To test out on the Rinkeby test network have MetaMask installed on your browser."
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: ".5em",
              marginBottom: "5em"
            }}
          />
        </Container>
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
