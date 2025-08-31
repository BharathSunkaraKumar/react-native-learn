

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Stylecomponent = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Stylecomponent</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "dodgerblue",
        backgroundColor: "yellow",
        margin: 20,
        padding: 20
    }
})

export default Stylecomponent