import { View, Text, Image } from 'react-native'
import React from 'react'

interface Prodects {
    image: string,
    name: string,
    price: number,
    rating: number,

}
const Car = ({name, image, price, rating}: Prodects) => {
  return (
    <View>
      <Text>Car</Text>
      <Image  source={{uri:image}} style={{width: 200, height: 200, borderRadius: 20, marginBottom: 20, marginTop: 20}}/>
      <Text style={{fontWeight: "bold", fontSize: 25}}>{name}</Text>
      <Text style={{fontSize: 25}}>Price: {price}</Text>
      <Text>Rating: {rating}</Text>
    </View>
  )
}

export default Car