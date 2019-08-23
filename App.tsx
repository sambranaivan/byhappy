import React from 'react';
import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';



export default class App extends React.Component {
  state
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      file:'nada',
      console:"c"
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
    // this.file();

  }

  file = async ()=>{
    
    var f = await FileSystem.readDirectoryAsync("file://sdcard/")
    alert(f);
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{marginTop:Constants.statusBarHeight}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Prueba 23</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button  onPress={()=>this.file()}>Probar</Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  // #20d6c7
}