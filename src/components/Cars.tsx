import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Car from './Car';

interface Products {
    image: string,
    name: string,
    price: string,
    rating: string,
}
const Cars = () => {
    const cars = [
  {
    image: "https://images.unsplash.com/photo-1459603677915-a62079ffd002?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww",
    name: "Tesla Model S",
    price: 79999,
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxjYXJ8ZW58MHx8MHx8fDA%3D",
    name: "BMW M3",
    price: 69999,
    rating: 4.6
  },
  {
    image: "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxjYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Audi R8",
    price: 142700,
    rating: 4.9
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1695016595053-254e4a7a1f29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxjYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Mercedes AMG GT",
    price: 118600,
    rating: 4.7
  },
  {
    image: "https://images.unsplash.com/photo-1561131506-3c48296e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxjYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Ford Mustang GT",
    price: 55999,
    rating: 4.5
  }
];

console.log(cars);

  return (
    <View style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
      <Text style={{backgroundColor: "dodgerblue", padding: 20, margin: 20, fontSize: 20, borderRadius: 10}}>Cars</Text>
        <FlatList data={cars} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => (
            <Car name={item.name} image= {item.image} price={item.price} rating={item.rating} />
        )}/>
    </View>
  )
}


{/* <View style={{display: "flex", alignItems: "center"}}>
                <Image  source={{uri:item.image}} style={{width: 200, height: 200, borderRadius: 20, marginBottom: 20, marginTop: 20}}/>
                <Text style={{fontWeight: "bold", fontSize: 25}}>{item.name}</Text>
                <Text style={{fontSize: 25}}>Price: {item.price}</Text>
                <Text>Rating: {item.rating}</Text>
            </View> */}

export default Cars