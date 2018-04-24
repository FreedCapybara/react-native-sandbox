import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class GeometricButton extends React.Component {
  render() {
    return (
      <View style={[styles.flexCol, styles.inputWrapper]}>
        <View style={styles.flexRow}>

          <TouchableHighlight
            style={styles.button}
            onPress={this.props.onPress}>
            <LinearGradient
              style={styles.gradient}
              colors={['#b7fffa', '#b7fffa']}
              start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
              <Text>{this.props.title}</Text>
            </LinearGradient>
          </TouchableHighlight>

          <View style={{display: 'flex'}}>
            <View style={styles.topRightShadow} />
            <View style={styles.rightShadow} />
          </View>
        </View>

        {/* bottom borders */}
        <View style={styles.flexRow}>
          <View style={styles.bottomLeftShadow} />
          <View style={styles.bottomShadow} />
          <View style={styles.bottomRightShadow} />
        </View>
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
  inputWrapper: {
    backgroundColor: '#f5a7b8',
  },
  button: {
    height: 60,
    width: '100%',
    flexShrink: 1,
  },
  gradient: {
    flex: 1,
    borderWidth: 0,
  },
  topRightShadow: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 0,
    borderTopWidth: 17,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#0c273e',
    backgroundColor: '#84ede7',
  },
  rightShadow: {
    width: 15,
    height: 43,
    backgroundColor: '#84ede7',
  },
  bottomLeftShadow: {
    width: 0,
    height: 0,
    borderLeftWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 17,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#0c273e',
    backgroundColor: '#3dc3c5',
  },
  bottomShadow: {
    width: '100%',
    height: 17,
    backgroundColor: '#3dc3c5',
    flexShrink: 1,
  },
  bottomRightShadow: {
    width: 0,
    height: 0,
    borderLeftWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 17,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#3dc3c5',
    backgroundColor: '#84ede7',
  },
});

export default GeometricButton;
