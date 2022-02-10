import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Kruti-Dev': require('../assets/fonts/KrutiDev010.ttf'),
};
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      translate: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    var Translate = false;
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <Text>Profile</Text>
          <View>
            {this.state.translate ? <Text>Friend</Text> : <Text> दोस्त </Text>}
          </View>
          <TouchableOpacity
            value="Transalate"
            onPress={() => {
              this.setState({
                translate: !this.state.translate,
              });
            }}>
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
