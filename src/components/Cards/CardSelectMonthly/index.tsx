import { Pressable, Text, PressableProps } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { colors } from '../../../theme/theme'

type CardSelectMonthlyProps = {
  title: 'Sim' | 'Não'
  isSelected: boolean
} & PressableProps

const PressableAnimated = Animated.createAnimatedComponent(Pressable)
const TextAnimated = Animated.createAnimatedComponent(Text)

function CardSelectMonthly({
  title,
  isSelected,
  disabled,
  ...props
}: CardSelectMonthlyProps) {
  const selectedOffset = useSharedValue(isSelected ? 1 : 0)
  const pressableAnimatedStyle = useAnimatedStyle(() => {
    selectedOffset.value = isSelected
      ? withTiming(1, { duration: 150 })
      : withTiming(0, { duration: 150 })
    return {
      backgroundColor: interpolateColor(
        selectedOffset.value,
        [0, 1],
        [
          disabled ? colors.base.shapeSecundaria : colors.base.shapeSecundaria,
          disabled ? colors.produto.greenDark : colors.produto.green,
        ],
      ),
    }
  }, [isSelected, disabled])

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        selectedOffset.value,
        [0, 1],
        [colors.base.textoBase, colors.base.white],
      ),
    }
  }, [])
  return (
    <PressableAnimated
      disabled={disabled}
      {...props}
      className="flex-1 p-4 flex-row items-center justify-center rounded-[6px]"
      style={pressableAnimatedStyle}
    >
      <TextAnimated className="text-style-regular-md" style={textAnimatedStyle}>
        {title}
      </TextAnimated>
    </PressableAnimated>
  )
}
export default CardSelectMonthly
