import React from "react";
import { StyleSheet, View } from 'react-native';

export default function ColorButton({ backgroundColor, onPress = f => f }) {
    return {
      <TouchableHighlight 
        styles={styles.button}
        onPress={() => onPress(backgroundColor)}
        underlayColor="orange"
      >
        <View styles={styles.row}>
          <View style={[styles.sample, { backgroundColor }]} />
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "stretch",
        backgroundColor: "rgba(255,255,255, .8)"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"
    },
    sample: {
        height: 20,
        width: 20,
        margin: 5,
        borderRadius: 20,
        backgroundColor: "white"
    }
  });
