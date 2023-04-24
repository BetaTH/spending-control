import SafeArea from '../../components/SafeAreaAnimated'
import { ScrollView, View } from 'react-native'
import CardResume from '../../components/Cards/CardResume'
import CardTransactions from '../../components/Cards/CardTransactions'
import Button from '../../components/Button'
import { useState } from 'react'
import ModalCreateTransaction from '../../components/Modal/ModalCreateTransaction'
import { withTiming } from 'react-native-reanimated'

function Home() {
  const [showModalToAdd, setShowModalToAdd] = useState(false)
  const existing = (values) => {
    'worklet'
    const animations = {
      opacity: withTiming(0),
    }
    const initialValues = {
      opacity: 1,
    }
    return {
      initialValues,
      animations,
    }
  }
  return (
    <SafeArea
      exiting={existing}
      style={{ padding: 0, flex: 1, position: 'relative' }}
    >
      <View className="flex-1">
        <View className="flex-1">
          <View className="h-[134]" />
          <View className="">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row px-6" style={{ gap: 16 }}>
                <CardResume isDeposit />
                <CardResume isDeposit={false} />
              </View>
            </ScrollView>
          </View>
          <View className="flex-1">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="pb-6 mb-[108]">
                <CardTransactions
                  isLast={false}
                  transaction={{
                    description: 'Hamburguer',
                    category: 'Alimentação',
                    date: '10/04/2022',
                    type: 0,
                    value: 59,
                  }}
                />
                <CardTransactions
                  isLast={false}
                  transaction={{
                    description: 'Hamburguer',
                    category: 'Alimentação',
                    type: 1,
                    value: 59,
                  }}
                />
                <CardTransactions
                  isLast={false}
                  transaction={{
                    description: 'Hamburguer',
                    category: 'Alimentação',
                    type: 1,
                    value: 59,
                  }}
                />
                <CardTransactions
                  isLast={false}
                  transaction={{
                    description: 'Hamburguer',
                    category: 'Alimentação',
                    type: 1,
                    value: 59,
                  }}
                />
                <CardTransactions
                  isLast={false}
                  transaction={{
                    description: 'Hamburguer',
                    category: 'Alimentação',
                    type: 1,
                    value: 59,
                  }}
                />
                <CardTransactions
                  isLast={false}
                  transaction={{
                    description: 'Hamburguer',
                    category: 'Alimentação',
                    type: 1,
                    value: 59,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View className="flex-1 w-full h-full mt-[200] bg-base-shapePrincipal absolute -z-50" />
      </View>
      <Button
        size="large"
        iconName="plus"
        className="w-[60] h-[60] absolute bottom-6 right-6 rounded-full p-0 items-center justify-center border-base-white shadow-2xl"
        style={{
          shadowColor: '#171717',
          elevation: 10,
        }}
        onPress={() => setShowModalToAdd(true)}
      />
      {showModalToAdd && (
        <ModalCreateTransaction onClose={() => setShowModalToAdd(false)} />
      )}
    </SafeArea>
  )
}

export default Home
