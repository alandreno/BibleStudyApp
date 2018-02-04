import React from "react";
import { AppRegistry, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const routes = [{title:"Home", page:"Home", icon:"home", backgroundImage: require("./bw-cloudy-mountains.jpeg")}, 
                {title:"Read", page:"Read",icon:"book", backgroundImage: require("./person-reading.jpg")} ,
                {title:"Search", page:"Search",icon:"search", backgroundImage: require("./binoculars.jpeg")} ,
                {title:"Create Study", page:"CreateStudy", icon:"plus-square-o", backgroundImage: require("./snow-trees-fade.jpg")},
                {title:"Settings", page:"Settings", icon:"gear", backgroundImage: require("./mountains.jpeg")}]

var windowHeight = Dimensions.get('window').height;

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>        
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate(data.page)}>
                  <ImageBackground
                    source={data.backgroundImage}
                    style={sideBarStyle.image}>
                    <Container style={sideBarStyle.outerContainer}>
                      <Container style={sideBarStyle.innerContainer}>
                        <Icon name={data.icon} style={sideBarStyle.icon} />
                        <Text style={sideBarStyle.text}>{data.title}</Text>
                      </Container>
                    </Container>
                  </ImageBackground>
                </TouchableOpacity>
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
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 30
  },
  icon : {
    marginRight: 10,
    fontSize: 40,
    color: 'white',
    backgroundColor: 'transparent'
  },
  image: {
    height: windowHeight / 5
  },
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height: 40
  }
});