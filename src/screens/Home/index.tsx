import SafeArea from '../../components/SafeArea'
import { ScrollView, View } from 'react-native'
import CardResume from '../../components/Cards/CardResume'
import Button from '../../components/Button'

function Home() {
  return (
    <SafeArea style={{ padding: 0, flex: 1 }}>
      <View className="h-[200]"></View>
      <View className="w-full flex-1 bg-base-shapePrincipal">
        <View className="top-[-66px]">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardResume isDeposit />
            <View style={{ width: 16 }} />
            <CardResume isDeposit={false} />
          </ScrollView>
        </View>
        <ScrollView className="p-6 top-[-66px] space-y-6">
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
          <Button text="Cadastrar" />
        </ScrollView>
      </View>
    </SafeArea>
  )
}

export default Home
