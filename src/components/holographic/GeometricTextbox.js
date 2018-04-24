import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

class GeometricTextbox extends React.Component {
  render() {
    return (
      <View style={[styles.flexCol, styles.inputWrapper]}>
        <View style={styles.flexRow}>
          <TextInput
            style={styles.input}
            onChangeText={this.props.onChangeText}
            value={this.props.text}
            secureTextEntry={this.props.secureTextEntry}
            keyboardType={this.props.keyboardType}
            underlineColorAndroid="rgba(0,0,0,0)" />

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
    backgroundColor: '#74b9f3',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#a5d6ff',
    paddingLeft: 15,
    paddingRight: 15,
    flexShrink: 1,
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
    backgroundColor: '#74b9f3',
  },
  rightShadow: {
    width: 15,
    height: 28,
    backgroundColor: '#74b9f3',
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
    backgroundColor: '#285e8c',
  },
  bottomShadow: {
    width: '100%',
    height: 17,
    backgroundColor: '#285e8c',
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
    borderBottomColor: '#285e8c',
    backgroundColor: '#74b9f3',
  },
});

export default GeometricTextbox;
