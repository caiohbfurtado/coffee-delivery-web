import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { CartContext } from '../../contexts/CartContexts'
import { Container } from '../../components/Container'
import { Form } from './components/Form'
import { SelectedItems } from './components/SelectedItems'

import {
  CartContainer,
  EmptyContainer,
  SectionCartContainer,
  Title,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const orderFormValidationSchema = zod.object({
  zipCode: zod.string().min(8, 'Informe o CEP'),
  street: zod
    .string({
      required_error: 'Informe a rua da residência',
    })
    .min(1),
  number: zod
    .string({
      required_error: 'Informe o número da residência',
    })
    .min(1),
  additionalInfo: zod.string().optional(),
  neighborhood: zod
    .string({
      required_error: 'Informe o bairro',
    })
    .min(1),
  city: zod
    .string({
      required_error: 'Informe a cidade',
    })
    .min(1),
  state: zod
    .string({
      required_error: 'Informe o estado',
    })
    .min(1),
  payment: zod.union([
    zod.literal('credit_card'),
    zod.literal('debit_card'),
    zod.literal('money'),
  ]),
})

export type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Cart() {
  const { cart, addOrderInfo, finishTheOrder } = useContext(CartContext)
  const navigate = useNavigate()

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      additionalInfo: '',
      neighborhood: '',
      city: '',
      state: '',
      payment: 'credit_card',
    },
  })

  const { handleSubmit, reset } = orderForm

  const hasItemsInCart = cart.length > 0

  function handleCreateNewOrder(data: OrderFormData) {
    addOrderInfo(data)

    reset()
    finishTheOrder()

    navigate('/sucesso')
  }

  return (
    <Container>
      {hasItemsInCart ? (
        <CartContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
          <FormProvider {...orderForm}>
            <SectionCartContainer width={640}>
              <Title>Complete seu pedido</Title>

              <Form />
            </SectionCartContainer>

            <SectionCartContainer width={448}>
              <Title>Cafés selecionados</Title>

              <SelectedItems />
            </SectionCartContainer>
          </FormProvider>
        </CartContainer>
      ) : (
        <EmptyContainer>
          <p>
            Não há items no carrinho, <Link to="/">volte</Link> e faça seu
            pedido.
          </p>
        </EmptyContainer>
      )}
    </Container>
  )
}
