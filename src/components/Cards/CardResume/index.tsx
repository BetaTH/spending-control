import { View, Text, StyleSheet } from 'react-native'
import { colors, typography } from '../../../theme'
import ArrowUp from '../../../assets/icons/arrow-circle-up-regular.svg'
import ArrowDown from '../../../assets/icons/arrow-circle-down-regular.svg'

type CardResumeProps = {
  isDeposit: boolean
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 280,
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderRadius: 6,
    backgroundColor: colors.base.shapeTerciaria,
    gap: 12,
  },
  row1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row2: { width: '100%', flexDirection: 'column', gap: 2 },
  textType: { color: colors.base.textoBase, ...typography.regular.md },
  textValue: { color: colors.base.titulos, ...typography.bold['2xl'] },
  textDate: {
    color: colors.base.placeholder,
    ...typography.regular.sm,
  },
})

function CardResume({ isDeposit }: CardResumeProps) {
  return (
    <View
      style={[
        style.container,
        { marginLeft: isDeposit ? 24 : 0, marginRight: isDeposit ? 0 : 24 },
      ]}
    >
      <View style={style.row1}>
        <Text style={style.textType}>{isDeposit ? 'Entrada' : 'Sáida'}</Text>
        {isDeposit ? <ArrowUp /> : <ArrowDown />}
      </View>
      <View style={style.row2}>
        <Text style={style.textValue}>R$ 17.400,00</Text>
        <Text style={style.textDate}>
          Última {isDeposit ? 'entrada' : 'sáida'} em 13 de abril
        </Text>
      </View>
    </View>
  )
}
export default CardResume
