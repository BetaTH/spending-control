import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

type ButtonProps = {
  text: string
  size?: 'small' | 'medium' | 'large'
} & TouchableOpacityProps

function Button({ text, size, ...props }: ButtonProps) {
  const className = !size
    ? 'w-full px-[20px] py-[12px]'
    : size === 'small'
    ? 'px-[16px] py-[8px]'
    : size === 'medium'
    ? 'px-[20px] py-[12px]'
    : 'px-[32px] py-[16px]'

  return (
    <TouchableOpacity
      className={`${className} bg-produto-greenLight rounded-[6px] items-center`}
      {...props}
    >
      <Text
        className={`text-base-white ${
          size === 'small' ? 'text-style-bold-sm' : 'text-style-bold-md'
        }`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
export default Button
