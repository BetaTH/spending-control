import { View, Text } from 'react-native'
import ArrowUp from '../../../assets/icons/arrow-circle-up-regular.svg'
import ArrowDown from '../../../assets/icons/arrow-circle-down-regular.svg'

type CardResumeProps = {
  isDeposit: boolean
}

function CardResume({ isDeposit }: CardResumeProps) {
  return (
    <View
      className={`flex-col w-[280] px-8 py-6 bg-base-shapeTerciaria rounded-[6px] space-y-3 ${
        isDeposit ? 'ml-6' : 'mr-6'
      }`}
    >
      <View className="w-full flex-row justify-between">
        <Text className="text-base-textoBase text-style-regular-md">
          {isDeposit ? 'Entrada' : 'Sáida'}
        </Text>
        {isDeposit ? <ArrowUp /> : <ArrowDown />}
      </View>
      <View className="w-full flex-col space-y-[2]">
        <Text className="text-base-titulos text-style-bold-2xl">
          R$ 17.400,00
        </Text>
        <Text className="text-base-placeholder text-style-regular-sm">
          Última {isDeposit ? 'entrada' : 'sáida'} em 13 de abril
        </Text>
      </View>
    </View>
  )
}
export default CardResume
