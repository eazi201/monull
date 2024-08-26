import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

const TabIcon = ({ icon, color, name, focused})=>{
    return(
        <View>
            <Image
            source={icon}/>
        </View>
    )
}
const TabsLayout = () => {
  return (
   <>
   <Tabs>
    <Tabs.Screen
    name="home"
    // options={{
    //     title: 'Home',
    //     headerShown: false,
    //     tabBarIcon: ({ color, focused}) => (
    //     <TabIcon
    //     icon={icons.home}
    //     color={color}
    //     name="Home"
    //     focused={focused}/>
    //     )
    // }}
    />
   </Tabs>
   </>
  )
}

export default TabsLayout