import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => {
    const life = ["coding", "gym", "diet"]
  return (
    <View>
      <Text>
        render data 
      </Text>
        <FlatList data={life} keyExtractor={item => item}  renderItem={({item})=>{
            return <Text>{item}</Text>
        }}/>
    </View>
  )
}

export default ListData