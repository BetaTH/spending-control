import { UseControllerProps, useController } from 'react-hook-form'
import { TextInput, TextInputProps, View, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated'
import { colors } from '../../../theme/theme'
import { useState } from 'react'

type ControledInputTextProps<T> = {
  label: string
  placeholder: string
  hintText?: string
  width?: number
  required?: boolean
  controlProps?: UseControllerProps<T>
} & TextInputProps

const TextAnimated = Animated.createAnimatedComponent(Text)
const TextInputAnimated = Animated.createAnimatedComponent(TextInput)

function ControledInputText<T>({
  label,
  placeholder,
  hintText,
  width,
  required,
  controlProps,
  ...props
}: ControledInputTextProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(controlProps)

  const [isFocused, setIsFocused] = useState(false)

  const selectedOffset = useSharedValue(error?.message ? 1 : 0)
  const focusOffset = useSharedValue(0)

  const errorMessageAnimatedStyle = useAnimatedStyle(() => {
    selectedOffset.value = error?.message
      ? withTiming(1, { duration: 150 })
      : withTiming(0, { duration: 150 })
    return {
      fontSize: interpolate(selectedOffset.value, [0, 1], [0, 14]),
    }
  }, [error])

  const inputAnimatedStyle = useAnimatedStyle(() => {
    focusOffset.value = isFocused
      ? withTiming(1, { duration: 150 })
      : withTiming(0, { duration: 150 })
    return {
      borderColor: interpolateColor(
        focusOffset.value,
        [0, 1],
        [
          error?.message ? colors.produto.redDark : '#00000000',
          error?.message ? colors.produto.redDark : colors.produto.greenLight,
        ],
      ),
    }
  }, [isFocused, error])

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
      <TextInputAnimated
        className="w-full rounded-[6px] bg-base-background px-4 py-3 text-style-regular-md text-base-white"
        style={[
          {
            borderWidth: 1,
          },
          inputAnimatedStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.base.placeholder}
        value={field?.value as string}
        onChangeText={field?.onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {hintText && (
        <Text className="texxt-style-regular-sm text-base-placeholder">
          {hintText}
        </Text>
      )}
      <TextAnimated
        className="texxt-style-regular-sm text-produto-redDark align-text-top"
        style={errorMessageAnimatedStyle}
      >
        {error?.message}
      </TextAnimated>
    </View>
  )
}

export default ControledInputText
