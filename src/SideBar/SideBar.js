import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Home", "Read", "CreateStudy"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <Image
            source={require('./snow-trees-fade.jpg')}
            style={{
              height: 190,
              width:285,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }} />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}