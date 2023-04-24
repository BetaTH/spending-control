import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from 'react-native'
import Close from '../../../assets/icons/x-regular.svg'
import Button from '../../Button'
import InputText from '../../Inputs/InputText'
import SelectTypeTransaction from '../../Selects/SelectType'
import SelectMonthly from '../../Selects/SelectMonthly'
import { useForm } from 'react-hook-form'
import { TransactionForm } from '../../../Types/transaction'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ControledInputText from '../../Inputs/ControledInputText'
import { colors } from '../../../theme/theme'

type ModalCreateTransactionProps = {
  onClose: () => void
}

const schema = yup.object().shape({
  description: yup.string().required('Descrição é obrigatária!'),
})

function ModalCreateTransaction({ onClose }: ModalCreateTransactionProps) {
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
      visible={true}
      animationType="slide"
      transparent={true}
    >
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View
          style={{
            flex: 1,
            backgroundColor: colors.base.shapePrincipal,
            padding: 24,
            gap: 24,
          }}
        >
          <View className="w-full justify-between pt-6 flex-row items-center">
            <Text className="text-style-bold-2xl text-base-titulos">
              Nova Transação
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Close width={32} height={32} />
            </TouchableOpacity>
          </View>
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className="flex-1" style={{ gap: 24 }}>
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
            </View>
          </ScrollView>
          <Button
            title="Cadastrar"
            size="large"
            onPress={handleSubmit(handleSubmitForm)}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default ModalCreateTransaction
