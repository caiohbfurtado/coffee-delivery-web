import { Container } from '../../components/Container'
import { Form } from './components/Form'
import { SelectedItems } from './components/SelectedItems'
import { CartContainer, SectionCartContainer, Title } from './styles'

export function Cart() {
  return (
    <Container>
      <CartContainer>
        <SectionCartContainer width={640}>
          <Title>Complete seu pedido</Title>

          <Form />
        </SectionCartContainer>

        <SectionCartContainer width={448}>
          <Title>Cafés selecionados</Title>

          <SelectedItems />
        </SectionCartContainer>
      </CartContainer>
    </Container>
  )
}
