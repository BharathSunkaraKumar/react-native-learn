import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayofObject = () => {
    const players = [
        {
            id: 1,
            name: "virat kohli"
        },
        {
            id: 2,
            name: "shreyas iyer"
        },
        {
            id: 3,
            name: "kl rahul"
        },
    ]
  return (
    <View>
      <Text>ArrayofObject</Text>
      <FlatList data={players} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Text>{item.name}</Text>} /> 
    </View>
  )
}

export default ArrayofObject