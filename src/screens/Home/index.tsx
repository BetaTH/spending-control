import SafeArea from '../../components/SafeArea'
import { ScrollView, View } from 'react-native'
import { colors } from '../../theme'
import CardResume from '../../components/Cards/CardResume'

function Home() {
  return (
    <SafeArea style={{ padding: 0, flex: 1 }}>
      <View style={{ height: 200 }}></View>
      <View
        style={{
          width: '100%',
          flex: 1,
          backgroundColor: colors.base.shapePrincipal,
        }}
      >
        <View style={{ width: '100%', top: -66 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ gap: 24 }}
          >
            <CardResume isDeposit />
            <View style={{ width: 16 }} />
            <CardResume isDeposit={false} />
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </SafeArea>
  )
}

export default Home
