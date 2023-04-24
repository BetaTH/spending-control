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
import { useForm } from 'react-hook-form'
import { TransactionForm } from '../../../Types/transaction'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ControledInputText from '../../Inputs/ControledInputText'

type BottomSheetCreateTransactionProps = {
  showModal: boolean
  onClose: () => void
}

const SCREEN_HEIGHT_WITH_STATUSBAR = Dimensions.get('screen').height

const schema = yup.object().shape({
  description: yup.string().required('Descrição é obrigatária!'),
})

function BottomSheetCreateTransaction({
  showModal,
  onClose,
}: BottomSheetCreateTransactionProps) {
  const marginContent = useRef(0)
  const [contantHeight, setContentHeight] = useState(0)
  const { control, handleSubmit } = useForm<TransactionForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: '',
    },
  })
  function handleSubmitForm(data: TransactionForm) {
    console.log(data)
  }

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
            <ControledInputText
              controlProps={{
                control,
                name: 'description',
              }}
              label="Descrição"
              placeholder="Descrição da transação"
              required
            />
            <View
              className="flex-row w-full justify-between"
              style={{ gap: 8 }}
            >
              <InputText
                // controlProps={{ control, name: 'valueTransaction' }}
                label="Valor da transação"
                placeholder="R$ 0,00"
                required
              />
              <InputText
                // controlProps={{ control, name: 'times' }}
                label="Vezes"
                placeholder="1"
                width={100}
              />
            </View>
            <InputText
              // controlProps={{ control, name: 'category' }}
              label="Categoria"
              placeholder="Categoria"
              required
            />
            <SelectTypeTransaction required />
            <SelectMonthly disabled={false} required />
            <InputText
              // controlProps={{ control, name: 'date' }}
              label="Data"
              placeholder="dd/mm/aaaa"
            />
            <Button
              title="Cadastrar"
              size="large"
              onPress={handleSubmit(handleSubmitForm)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default BottomSheetCreateTransaction
