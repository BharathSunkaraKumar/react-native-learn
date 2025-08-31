import {Text, View} from "react-native";
import Sbk from "../components/Greet";
import TextComponent from "../components/TextComponent";
import ContentComponent from "../components/ContentComponent";
import ButtonComp from "../components/Buttoncom";
import Imagecomponent from "../components/Imagecomponent";
import Stylecomponent from "../components/Stylecomponent";
import Externerstyle from "../components/Externerstyle";
import ListData from "../components/ListData";
import ArrayofObject from "../components/ArrayofObject";
import Cars from "../components/Cars";
import Counter from "../components/Counter/Counter";
import UpdateArray from "../components/useState/UpdateArray";

const Index = () => {
    return (
        <View style={{marginTop:25}}>
            {/* <Text>Hello, world</Text>
            <TextComponent/>
            <ContentComponent/>
            <ButtonComp/>
            <Sbk/>
            <Imagecomponent/>
            <Stylecomponent/>
            <Externerstyle/> */}
            {/* <ListData/>
            <ArrayofObject/> */}
            {/* <Cars/> */}
            {/* <Counter/> */}
            <UpdateArray/>
        </View>
    )
}

export default Index;