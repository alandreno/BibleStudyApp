import React from "react";
import { AppRegistry, ImageBackground, StatusBar, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const routes = [{title:"Home", page:"Home", icon:"home"}, 
                {title:"Read", page:"Read",icon:"book"} ,
                {title:"Create Study", page:"CreateStudy", icon:"plus-square-o"},
                {title:"Settings", page:"Settings", icon:"gear"}]

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <ImageBackground
            source={require('./snow-trees-fade.jpg')}
            style={sideBarStyle.image}>
              <Text style={sideBarStyle.heartText}>Good Evening, Alan</Text>
            </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.page)}>
                  <Icon name={data.icon} style={sideBarStyle.icon} />
                  <Text style={sideBarStyle.text}>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const sideBarStyle = StyleSheet.create({
  text: {
    color: 'gray'
  },
  icon : {
    marginRight: 10,
    fontSize: 20,
    color: 'gray'
  },
  image: {
    height: 190,
    width:285,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  heartText: {
    color: 'white', 
    fontSize: 25, 
    fontFamily: "AvenirNext-UltraLight"
  }
});