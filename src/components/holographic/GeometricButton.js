import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

class GeometricButton extends React.Component {
  render() {
    return (
      <View style={styles.flexRow}>
        <View style={styles.flexCol}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.props.onPress}>
            <Text>{this.props.title}</Text>
          </TouchableHighlight>

          <View style={styles.flexRow}>
            <Image
              style={styles.leftShadow}
              source={require('../../../assets/images/left.png')} />

            <View style={styles.bottomShadow} />
          </View>
        </View>

        <Image
          style={styles.rightShadow}
          source={require('../../../assets/images/right.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    width: '100%',
  },
  flexCol: {
    display: 'flex',
    width: '100%',
    flexShrink: 1
  },
  button: {
    height: 45,
    backgroundColor: '#ffd7e7',
    paddingLeft: 15,
    paddingRight: 15,
  },
  leftShadow: {
    height: 22,
    marginTop: -1,
  },
  bottomShadow: {
    height: 17,
    backgroundColor: '#cf8b9a',
    width: '100%',
    flexShrink: 1,
  },
  rightShadow: {
    width: 20,
    marginLeft: -2
  }
});

export default GeometricButton;
