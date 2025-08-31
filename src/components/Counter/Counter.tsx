import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <View>
      <Text>Counter {count}</Text>
      <Button color='green' title="count increment" onPress={()=>{setCount(count+1)}}/>
      <Button title="count increment" onPress={()=>{setCount(count-1)}}/>
    </View>
  )
}

export default Counter