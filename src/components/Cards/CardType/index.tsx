import ArrowUp from '../../../assets/icons/arrow-circle-up-regular.svg'
import ArrowDown from '../../../assets/icons/arrow-circle-down-regular.svg'
import { Pressable, PressableProps, Text } from 'react-native'
import theme from '../../../theme/theme'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

type CardTypeTransactionProps = {
  type: 0 | 1
  isSelected: boolean
} & PressableProps

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

function CardTypeTransaction({
  type,
  isSelected,
  ...props
}: CardTypeTransactionProps) {
  const { colors } = theme
  const selectedOffset = useSharedValue(0)

  const pressableAnimatedStyle = useAnimatedStyle(() => {
    selectedOffset.value = isSelected
      ? withTiming(1, { duration: 150 })
      : withTiming(0, { duration: 150 })
    return {
      backgroundColor: interpolateColor(
        selectedOffset.value,
        [0, 1],
        [
          colors.base.shapeSecundaria,
          type ? colors.produto.redDark : colors.produto.greenDark,
        ],
      ),
    }
  }, [isSelected, type])
  // const ArrowDown = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z" fill="${colors.produto.red}"/>
  // <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0553 16.0553C11.4459 15.6648 12.079 15.6648 12.4696 16.0553L16 19.5857L19.5303 16.0553C19.9209 15.6648 20.554 15.6648 20.9446 16.0553C21.3351 16.4459 21.3351 17.079 20.9446 17.4696L16.7071 21.7071C16.3165 22.0976 15.6834 22.0976 15.2928 21.7071L11.0553 17.4696C10.6648 17.079 10.6648 16.4459 11.0553 16.0553Z" fill="${colors.produto.red}"/>
  // <path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C16.5523 10 17 10.4477 17 11V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V11C15 10.4477 15.4477 10 16 10Z" fill="${colors.produto.red}"/>
  // </svg>
  // `
  // const ArrowUp = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z" fill="currentColor"/>
  // <path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C16.2652 10 16.5195 10.1054 16.7071 10.2929L20.9446 14.5304C21.3351 14.9209 21.3351 15.5541 20.9446 15.9446C20.554 16.3351 19.9209 16.3351 19.5303 15.9446L16 12.4142L12.4696 15.9446C12.079 16.3351 11.4459 16.3351 11.0553 15.9446C10.6648 15.5541 10.6648 14.9209 11.0553 14.5304L15.2928 10.2929C15.4804 10.1054 15.7347 10 16 10Z" fill="currentColor"/>
  // <path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C16.5523 10 17 10.4477 17 11V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V11C15 10.4477 15.4477 10 16 10Z" fill="currentColor"/>
  // </svg>`

  // const iconsAnimatedStyle = useAnimatedProps(() => {
  //   return {
  //     color: interpolateColor(
  //       selectedOffset.value,
  //       [0, 1],
  //       [colors.base.white, type ? colors.produto.red : colors.produto.green],
  //     ),
  //   }
  // }, [isSelected])

  return (
    <PressableAnimated
      className={`flex-1 p-4 flex-row items-center justify-center rounded-[6px]`}
      style={[{ gap: 11 }, pressableAnimatedStyle]}
      {...props}
    >
      {type ? (
        <ArrowDown
          width={24}
          height={24}
          color={isSelected ? colors.base.white : colors.produto.red}
        />
      ) : (
        <ArrowUp
          width={24}
          height={24}
          color={isSelected ? colors.base.white : colors.produto.green}
        />
      )}
      <Text
        className="text-style-regular-md"
        style={{
          color: isSelected ? colors.base.white : colors.base.textoBase,
        }}
      >
        {type ? 'Saída' : 'Entrada'}
      </Text>
    </PressableAnimated>
  )
}
export default CardTypeTransaction
