import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import GeometricTextbox from '../components/holographic/GeometricTextbox';
import GeometricButton from '../components/holographic/GeometricButton';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textboxWrapper}>
          <GeometricTextbox
            onChangeText={(username) => this.setState({username})}
            text={this.state.username}
            keyboardType={'email-address'} />
        </View>

        <View style={styles.textboxWrapper}>
          <GeometricTextbox
            onChangeText={(password) => this.setState({password})}
            text={this.state.password}
            secureTextEntry={true} />
        </View>

        <View style={styles.buttonWrapper}>
          <GeometricButton
            onPress={() => {}}
            title={'Sign in'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textboxWrapper: {
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonWrapper: {
    marginTop: 160,
    paddingLeft: 20,
    paddingRight: 20
  },
});

const mapStateToProps = (state, props) => {
  return state.myReducer;
};

export default connect(mapStateToProps)(Home);
