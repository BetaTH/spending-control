import { View, Text } from 'react-native'

import { useState } from 'react'
import CardSelectMonthly from '../Cards/CardSelectMonthly'

function SelectMonthly() {
  const [isMonthly, setIsMonthly] = useState(false)
  function handleSetIsMonthly(offSet: boolean) {
    setIsMonthly(offSet)
  }
  return (
    <View className="flex-row items-center justify-between" style={{ gap: 8 }}>
      <Text className="text-style-regular-md text-base-titulos">Mensal: </Text>
      <CardSelectMonthly
        title="Sim"
        isSelected={isMonthly}
        onPress={() => handleSetIsMonthly(true)}
      />
      <CardSelectMonthly
        title="Não"
        isSelected={!isMonthly}
        onPress={() => handleSetIsMonthly(false)}
      />
    </View>
  )
}

export default SelectMonthly
