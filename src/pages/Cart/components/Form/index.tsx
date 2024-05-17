import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Input } from '../../../../components/Input'
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

export function Form() {
  const {
    colors: { branding },
  } = useTheme()

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
          <Input placeholder="CEP" />
          <Input placeholder="Rua" />

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input placeholder="Número" style={{ width: '12.5rem' }} />
            <Input placeholder="Complemento" />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Input placeholder="Bairro" style={{ width: '12.5rem' }} />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" style={{ width: '3.75rem' }} />
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
          <Select
            label="Cartão de Crédito"
            icon={CreditCard}
            id="credit-card"
          />
          <Select label="Cartão de Débito" icon={Bank} id="debit-card" />
          <Select label="Dinheiro" icon={Money} id="money" />
        </BoxContent>
      </Box>
    </FormContainer>
  )
}
