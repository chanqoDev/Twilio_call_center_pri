import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

function Login() {
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="yellow" textAlign="center">
          Login into your account:{" "}
        </Header>
        <Form>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="User Name"
            />
            <Form.Input
              fluid
              icon="mobile"
              iconPosition="left"
              placeholder="Mobile number"
            />

            <Button.Group fluid>
              <Button type="submit" color="teal">
                Sign up
              </Button>
              <Button type="submit" color="white">
                Login
              </Button>
              <Button basic type="button">
                <u>Forgot your password?</u>
              </Button>
            </Button.Group>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
