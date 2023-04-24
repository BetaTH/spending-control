import { TextInput, TextInputProps, View, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated'

type InputTextProps = {
  label: string
  placeholder: string
  hintText?: string
  errorMessage?: string
  width?: number
  required?: boolean
} & TextInputProps

const TextAnimated = Animated.createAnimatedComponent(Text)
function InputText({
  label,
  placeholder,
  hintText,
  errorMessage,
  width,
  required,
  ...props
}: InputTextProps) {
  const selectedOffset = useSharedValue(errorMessage ? 1 : 0)

  const errorMessageAnimatedStyle = useAnimatedStyle(() => {
    selectedOffset.value = errorMessage
      ? withTiming(1, { duration: 150 })
      : withTiming(0, { duration: 150 })
    return {
      fontSize: interpolate(selectedOffset.value, [0, 1], [0, 14]),
    }
  }, [errorMessage])

  return (
    <View style={{ gap: 4, width, flex: width ? undefined : 1 }}>
      {label && (
        <View className="flex-row items-center" style={{ gap: 4 }}>
          <Text className="text-style-regular-md text-base-white">
            {label + ':'}
          </Text>
          {required && (
            <Text className="text-style-regular-xs text-base-placeholder">
              {'(Obrigatório)'}
            </Text>
          )}
        </View>
      )}
      <TextInput
        className="w-full rounded-[6px] bg-base-background px-4 py-3 border-transparent text-style-regular-md text-base-white focus:border-produto-greenLight"
        style={{ borderWidth: 1 }}
        placeholder={placeholder}
        placeholderTextColor="#7C7C8A"
        {...props}
      />
      {hintText && (
        <Text className="texxt-style-regular-sm text-base-placeholder">
          {hintText}
        </Text>
      )}

      {errorMessage && (
        <TextAnimated
          className="texxt-style-regular-sm text-produto-redDark"
          style={errorMessageAnimatedStyle}
        >
          {errorMessage}
        </TextAnimated>
      )}
    </View>
  )
}

export default InputText
