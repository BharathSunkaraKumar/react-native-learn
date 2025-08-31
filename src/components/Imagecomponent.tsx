import { View, Text, Image } from 'react-native'
import React from 'react'

const Imagecomponent = () => {
  return (
    <View>
      <Text>Imagecomponent</Text>
      <Image source={require('../assets/car.jpg')} style={{width: 200, height: 200}}/>
      <Image source={{uri: "https://reactjs.org/logo-og.png"}} style={{width: 200, height: 200}}/>
    </View>
  )
}

export default Imagecomponent