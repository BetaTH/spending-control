import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Pressable,
} from 'react-native'
import Close from '../../../assets/icons/x-regular.svg'
import Button from '../../Button'
import InputText from '../../Inputs/InputText'
import { useRef, useState } from 'react'
import InputTypeTransaction from '../../Inputs/InputType'

type BottomSheetCreateTransactionProps = {
  showModal: boolean
  onClose: () => void
}

const SCREEN_HEIGHT_WITH_STATUSBAR = Dimensions.get('screen').height

function BottomSheetCreateTransaction({
  showModal,
  onClose,
}: BottomSheetCreateTransactionProps) {
  const marginContent = useRef(0)
  const [contantHeight, setContentHeight] = useState(0)
  return (
    <Modal
      onRequestClose={onClose}
      statusBarTranslucent
      visible={showModal}
      animationType="slide"
      transparent={true}
    >
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <ScrollView
          className="flex-1 bg-base-backgroundOpacity"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            className="flex-1 items-end flex-row"
            style={{ height: contantHeight }}
            onPress={onClose}
          />
          <View
            className="w-full bg-base-shapePrincipal rounded-t-[20px] p-6"
            style={{ gap: 24 }}
            onLayout={(l) => {
              const CONTENT_HEIGHT = l.nativeEvent.layout.height
              const margin = SCREEN_HEIGHT_WITH_STATUSBAR - CONTENT_HEIGHT
              marginContent.current = margin
              setContentHeight(margin)
            }}
          >
            <View className="w-full justify-between flex-row">
              <Text className="text-style-bold-xl text-base-titulos">
                Nova Transação
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Close width={24} height={24} />
              </TouchableOpacity>
            </View>
            <InputText placeholder="Descrição" />
            <InputText placeholder="Preço" />
            <InputText placeholder="Categoria" />
            <InputTypeTransaction />
            <Button title="Cadastrar" size="medium" />
          </View>
          {/* </Pressable> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default BottomSheetCreateTransaction
