import {Text, View} from "react-native";
import Sbk from "../components/Greet";
import TextComponent from "../components/TextComponent";
import ContentComponent from "../components/ContentComponent";
import ButtonComp from "../components/Buttoncom";
import Imagecomponent from "../components/Imagecomponent";
import Stylecomponent from "../components/Stylecomponent";
import Externerstyle from "../components/Externerstyle";

const Index = () => {
    return (
        <View>
            <Text>Hello, world</Text>
            <TextComponent/>
            <ContentComponent/>
            <ButtonComp/>
            <Sbk/>
            <Imagecomponent/>
            <Stylecomponent/>
            <Externerstyle/>
        </View>
    )
}

export default Index;