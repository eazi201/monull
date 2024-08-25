import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <>
    <Text>Header</Text>
     <slot/>
     <Text>Footer</Text>
    </>
 
  )
}

export default  RootLayout
