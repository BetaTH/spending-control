import React from 'react'
import { SafeAreaView, Platform, StatusBar, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

const SafeAreaAnimated = Animated.createAnimatedComponent(SafeAreaView)

type Props = {
  style?: ViewStyle
} & React.ComponentProps<typeof SafeAreaAnimated>

function SafeArea({ style, children, ...props }: Props) {
  return (
    <SafeAreaAnimated
      style={[
        style,
        {
          flex: 1,
          paddingTop:
            Number(style?.paddingTop || 0) +
            (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        },
      ]}
      {...props}
    >
      {children}
    </SafeAreaAnimated>
  )
}

export default SafeArea
