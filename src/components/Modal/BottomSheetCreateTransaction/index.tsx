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
import SelectTypeTransaction from '../../Selects/SelectType'
import SelectMonthly from '../../Selects/SelectMonthly'

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
            <InputText
              label="Descrição"
              placeholder="Descrição da transação"
              required
            />
            <View
              className="flex-row w-full justify-between"
              style={{ gap: 8 }}
            >
              <InputText
                label="Valor da transação"
                placeholder="R$ 0,00"
                required
              />
              <InputText label="Vezes" placeholder="1" width={100} />
            </View>
            <InputText label="Categoria" placeholder="Categoria" required />
            <SelectTypeTransaction required />
            <SelectMonthly disabled={false} required />
            <InputText label="Data" placeholder="dd/mm/aaaa" />
            <Button title="Cadastrar" size="large" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default BottomSheetCreateTransaction
