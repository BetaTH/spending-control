import React from 'react'
import {
  SafeAreaView,
  ViewProps,
  Platform,
  StatusBar,
  ViewStyle,
} from 'react-native'

type Props = {
  style?: ViewStyle
} & ViewProps

function SafeArea({ style, children, ...props }: Props) {
  return (
    <SafeAreaView
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
    </SafeAreaView>
  )
}

export default SafeArea
