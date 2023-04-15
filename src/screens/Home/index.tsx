import SafeArea from '../../components/SafeArea'
import { Text } from 'react-native'
import UseTheme from '../../theme/theme'

function Home() {
  const { typography, colors } = UseTheme()

  return (
    <SafeArea style={{ paddingTop: 2 }}>
      <Text
        style={[{ color: colors.base.textoBase, ...typography.regular.md }]}
      >
        Home
      </Text>
    </SafeArea>
  )
}

export default Home
