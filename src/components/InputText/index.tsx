import { TextInput } from 'react-native'

type InputTextProps = {
  placeholder: string
}

function InputText({ placeholder, ...props }: InputTextProps) {
  return (
    <TextInput
      className="w-full rounded-[6px] bg-base-background px-4 py-4 text-style-regular-md text-base-white focus:border-produto-greenLight"
      placeholder={placeholder}
      placeholderTextColor="#7C7C8A"
    />
  )
}

export default InputText
