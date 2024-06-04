import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Select } from '../../../../components/Select'

import {
  Box,
  FormContainer,
  BoxHeader,
  HeaderContent,
  HeaderDescription,
  HeaderTitle,
  BoxContent,
} from './styles'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { OrderFormData } from '../..'

export function Form() {
  const {
    colors: { branding },
  } = useTheme()

  const {
    formState: { errors },
    register,
    control,
    watch,
  } = useFormContext<OrderFormData>()

  const payment = watch('payment')

  return (
    <FormContainer>
      <Box>
        <BoxHeader>
          <MapPinLine size={22} color={branding['yellow-dark']} />

          <HeaderContent>
            <HeaderTitle>Endereço de Entrega</HeaderTitle>

            <HeaderDescription>
              Informe o endereço onde deseja receber seu pedido
            </HeaderDescription>
          </HeaderContent>
        </BoxHeader>

        <BoxContent>
          <Input
            $required={errors.zipCode?.message}
            placeholder="CEP"
            {...register('zipCode')}
          />
          <Input
            $required={errors.street?.message}
            placeholder="Rua"
            {...register('street')}
          />

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input
              $required={errors.number?.message}
              placeholder="Número"
              style={{ width: '12.5rem' }}
              id="number"
              {...register('number')}
            />
            <Input
              $required={errors.additionalInfo?.message}
              placeholder="Complemento"
              id="additionalInfo"
              {...register('additionalInfo')}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input
              $required={errors.neighborhood?.message}
              placeholder="Bairro"
              style={{ width: '12.5rem' }}
              id="neighborhood"
              {...register('neighborhood')}
            />
            <Input
              $required={errors.city?.message}
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
            <Input
              $required={errors.state?.message}
              placeholder="UF"
              style={{ width: '3.75rem' }}
              id="state"
              {...register('state')}
            />
          </div>
        </BoxContent>
      </Box>

      <Box>
        <BoxHeader>
          <CurrencyDollar size={22} color={branding['purple-medium']} />

          <HeaderContent>
            <HeaderTitle>Pagamento</HeaderTitle>

            <HeaderDescription>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </HeaderDescription>
          </HeaderContent>
        </BoxHeader>

        <BoxContent direction="row">
          <Controller
            control={control}
            name="payment"
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  label="Cartão de Crédito"
                  icon={CreditCard}
                  name="payment"
                  id="credit_card"
                  value="credit_card"
                  checked={payment === 'credit_card'}
                />
                <Select
                  {...field}
                  label="Cartão de Débito"
                  icon={Bank}
                  name="payment"
                  id="debit_card"
                  value="debit_card"
                  checked={payment === 'debit_card'}
                />
                <Select
                  {...field}
                  label="Dinheiro"
                  icon={Money}
                  name="payment"
                  id="money"
                  value="money"
                  checked={payment === 'money'}
                />
              </>
            )}
          />
        </BoxContent>
      </Box>
    </FormContainer>
  )
}
