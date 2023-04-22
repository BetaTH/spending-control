import { Modal, Pressable, TouchableOpacity, View, Text } from 'react-native'
import Close from '../../../assets/icons/x-regular.svg'
import Button from '../../Button'

type BottomSheetCreateTransactionProps = {
  showModal: boolean
  onClose: () => void
}

function BottomSheetCreateTransaction({
  showModal,
  onClose,
}: BottomSheetCreateTransactionProps) {
  return (
    <Modal
      statusBarTranslucent
      visible={showModal}
      animationType="slide"
      transparent={true}
    >
      <Pressable className="flex-1 bg-[#121214B3] items-end flex-row">
        <View
          className="h-[500] w-full bg-base-shapePrincipal rounded-t-[20px] p-6"
          style={{ gap: 24 }}
        >
          <View className="w-full justify-between flex-row">
            <Text className="text-style-bold-xl text-base-titulos">
              Nova Transação
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Close width={24} height={24} />
            </TouchableOpacity>
          </View>
          <Button title="Cadastrar" size="medium" />
        </View>
      </Pressable>
    </Modal>
  )
}

export default BottomSheetCreateTransaction
