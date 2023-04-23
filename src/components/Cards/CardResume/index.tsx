import { View, Text } from 'react-native'
import ArrowUp from '../../../assets/icons/arrow-circle-up-regular.svg'
import ArrowDown from '../../../assets/icons/arrow-circle-down-regular.svg'
import { colors } from '../../../theme/theme'

type CardResumeProps = {
  isDeposit: boolean
}

function CardResume({ isDeposit }: CardResumeProps) {
  return (
    <View
      className={`flex-col w-[280] px-8 py-6 bg-base-shapeTerciaria rounded-[6px] space-y-3`}
    >
      <View className="w-full flex-row justify-between items-center">
        <Text className="text-base-textoBase text-style-regular-md">
          {isDeposit ? 'Entrada' : 'Sáida'}
        </Text>
        {isDeposit ? (
          <ArrowUp color={colors.produto.green} />
        ) : (
          <ArrowDown color={colors.produto.red} />
        )}
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
