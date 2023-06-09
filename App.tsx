/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Home from './src/screens/Home'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <View className="flex-1 bg-base-background">
      <StatusBar backgroundColor="transparent" style="light" translucent />
      {fontsLoaded && <Home />}
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '',
//   },
// })
