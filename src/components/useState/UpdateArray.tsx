import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friends, setFriends] = useState<string[]>(["walter white", 'jesse pinkman', 'gus fring', 'mike', 'saul goodman'])

    // const removeonePerson = () => {
    //    return  setFriends(
    //         friends.filter((each) => {
    //         each !== 'gus fring'
    //     })
    //     )
    // }
  return (
    <View>
      <Text>UpdateArray</Text>
      <FlatList data={friends} 
      keyExtractor={(friend)=>friend} 
      renderItem={({item}) => <Text>{item}</Text>}
      />
    <Button onPress={()=>setFriends([...friends, "hank norris"])} title='add one firend'/>
    {/* <Button onPress={removeonePerson} title='remove one firend'/> */}
    </View>
  )
}

export default UpdateArray