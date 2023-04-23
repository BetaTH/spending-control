import { TextInput, TextInputProps } from 'react-native'

type InputTextProps = {
  placeholder: string
} & TextInputProps

function InputText({ placeholder, ...props }: InputTextProps) {
  return (
    <TextInput
      className="w-full rounded-[6px] bg-base-background px-4 py-4 border-transparent text-style-regular-md text-base-white focus:border-produto-greenLight"
      style={{ borderWidth: 1 }}
      placeholder={placeholder}
      placeholderTextColor="#7C7C8A"
      {...props}
    />
  )
}

export default InputText
