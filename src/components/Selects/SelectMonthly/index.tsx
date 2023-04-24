import { View, Text } from 'react-native'

import { useState } from 'react'
import CardSelectMonthly from '../../Cards/CardSelectMonthly'

type SelectMonthlyProps = {
  disabled?: boolean
  required?: boolean
}

function SelectMonthly({ disabled, required, ...props }: SelectMonthlyProps) {
  const [isMonthly, setIsMonthly] = useState(false)
  function handleSetIsMonthly(offSet: boolean) {
    setIsMonthly(offSet)
  }
  return (
    <View className="flex-col" style={{ gap: 4 }}>
      <View className="flex-row items-center" style={{ gap: 4 }}>
        <Text className="text-style-regular-md text-base-titulos">Mensal:</Text>
        {required && (
          <Text className="text-style-regular-xs text-base-placeholder">
            {'(Obrigatório)'}
          </Text>
        )}
      </View>
      <View
        className="flex-row items-center justify-between"
        style={{ gap: 8 }}
      >
        <CardSelectMonthly
          title="Sim"
          isSelected={isMonthly}
          onPress={() => handleSetIsMonthly(true)}
          disabled={disabled}
        />
        <CardSelectMonthly
          title="Não"
          isSelected={!isMonthly}
          onPress={() => handleSetIsMonthly(false)}
          disabled={disabled}
        />
      </View>
    </View>
  )
}

export default SelectMonthly
