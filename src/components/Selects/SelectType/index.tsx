import { View, Text } from 'react-native'
import CardType from '../../Cards/CardType'
import { useState } from 'react'

type SelectTypeTransactionProps = {
  required?: boolean
}

function SelectTypeTransaction({
  required,
  ...props
}: SelectTypeTransactionProps) {
  const [typeSelected, setTypeSelected] = useState<0 | 1>()
  function handleSelectType(type: 0 | 1) {
    typeSelected === type ? setTypeSelected(undefined) : setTypeSelected(type)
  }

  return (
    <View className="flex-col" style={{ gap: 4 }}>
      <View className="flex-row items-center" style={{ gap: 4 }}>
        <Text className="text-style-regular-md text-base-titulos">Tipo:</Text>
        {required && (
          <Text className="text-style-regular-xs text-base-placeholder">
            {'(Obrigatório)'}
          </Text>
        )}
      </View>
      <View className="w-full flex-row justify-between" style={{ gap: 8 }}>
        <CardType
          type={0}
          onPress={() => handleSelectType(0)}
          isSelected={typeSelected === 0}
        />
        <CardType
          type={1}
          onPress={() => handleSelectType(1)}
          isSelected={typeSelected === 1}
        />
      </View>
    </View>
  )
}

export default SelectTypeTransaction
