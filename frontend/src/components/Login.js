import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
  Image,
} from "semantic-ui-react";

function Login({ user: { username, mobileNumber }, setUser }) {
  function populateFields(event, data) {
    setUser((draft) => {
      draft[data.name] = data.value;
    });
  }
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="rgb(238, 90, 36)" textAlign="center">
          <Image src="https://react.semantic-ui.com/logo.png" /> Log-in into
          your account:{" "}
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="User Name"
              value={username}
              onChange={(event, data) => {
                populateFields(event, data);
              }}
              name="username"
            />
            <Form.Input
              fluid
              icon="mobile alternate"
              iconPosition="left"
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(event, data) => {
                populateFields(event, data);
              }}
              name="mobileNumber"
            />
            <Button
              fluid
              size="large"
              type="submit"
              style={{
                backgroundColor: "rgb(238, 90, 36)",
                color: "#fff",
              }}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to Here? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
