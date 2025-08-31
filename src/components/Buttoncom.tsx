import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComp = () => {
  return (
    <View>
      <Text>Button</Text>
      <Button title="click me" color="crimson" onPress={()=>{console.warn("clicked")}}/>
      <Pressable onPress={()=>console.log("pressed")}>
        <Text>Press me</Text>
      </Pressable>
      <Pressable onPressIn={()=> console.log("on press in")}>
        <Text style={{color: "red"}}>Press in </Text>
      </Pressable>
      <Pressable onPressOut={()=> console.log("on press out")}>
        <Text style={{color: "blue"}}>Press out </Text>
      </Pressable>
      <Pressable onLongPress={()=> console.log("on long press")}>
        <Text style={{color: "green"}}>on longPress</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComp