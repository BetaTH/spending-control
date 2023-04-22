import { View, Text } from 'react-native'
import TagSimple from '../../../assets/icons/tag-simple-regular.svg'
import CalendarIcon from '../../../assets/icons/calendar-blank-regular.svg'

type CardTransactionsProps = {
  isLast: boolean
  transaction: {
    description: string
    category: string
    date?: string
    type: 0 | 1
    value: number
  }
}

function CardTransactions({
  isLast,
  transaction: { description, category, date, type, value },

  ...props
}: CardTransactionsProps) {
  return (
    <View
      className={`w-full py-5 px-6 ${
        !isLast && 'border-b-2 border-b-base-shapeTerciaria'
      }`}
      style={{ gap: 12 }}
    >
      <View
        className="flex-row justify-between items-center"
        style={{ gap: 12 }}
      >
        <Text
          className="flex-1 text-style-regular-md text-base-white"
          numberOfLines={1}
        >
          {description}
        </Text>
        <Text
          className={`text-style-bold-xl ${
            type ? 'text-produto-red' : 'text-produto-green'
          }  `}
        >
          {type ? '- R$ ' : 'R$ '}
          {value
            .toFixed(2)
            .replace('.', ',')
            .replace(/(?=(\d{3})+(\D))\B/g, '.')}
        </Text>
      </View>
      <View
        className="flex-row justify-between items-center"
        style={{ gap: 12 }}
      >
        <View className="flex-1 flex-row items-center" style={{ gap: 4 }}>
          <TagSimple width={16} height={16} />
          <Text className="text-style-regular-md text-base-placeholder">
            {category}
          </Text>
        </View>
        <View className="flex-row items-center" style={{ gap: 4 }}>
          <CalendarIcon width={16} height={16} />
          <Text className="text-style-regular-md text-base-placeholder">
            {date || 'Mensal'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default CardTransactions
