import { View } from 'react-native'
import CardType from '../../Cards/CardType'
import { useState } from 'react'

type InputTypeTransactionProps = {}

function InputTypeTransaction({ ...props }: InputTypeTransactionProps) {
  const [typeSelected, setTypeSelected] = useState<0 | 1>()
  function handleSelectType(type: 0 | 1) {
    typeSelected === type ? setTypeSelected(undefined) : setTypeSelected(type)
  }

  return (
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
  )
}

export default InputTypeTransaction
