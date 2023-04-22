import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styled } from 'nativewind'

const StyledIcon = styled(Feather)

type ButtonProps = {
  title?: string
  size?: 'small' | 'medium' | 'large'
  iconName?: React.ComponentProps<typeof Feather>['name']
} & TouchableOpacityProps

function Button({ title, size, iconName, className, ...props }: ButtonProps) {
  const classSize = !size
    ? 'w-full px-[20px] py-[12px]'
    : size === 'small'
    ? 'px-[16px] py-[8px]'
    : size === 'medium'
    ? 'px-[20px] py-[12px]'
    : 'px-[32px] py-[16px]'

  return (
    <TouchableOpacity
      className={`${classSize} bg-produto-greenLight rounded-[6px] items-center ${className}`}
      {...props}
    >
      {title && (
        <Text
          className={`text-base-white ${
            size === 'small' ? 'text-style-bold-sm' : 'text-style-bold-md'
          }`}
        >
          {title}
        </Text>
      )}
      {iconName && (
        <StyledIcon name={iconName} size={30} className="text-base-white" />
      )}
    </TouchableOpacity>
  )
}
export default Button
