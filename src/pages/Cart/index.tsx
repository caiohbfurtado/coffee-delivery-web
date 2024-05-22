import { useContext } from 'react'
import { Container } from '../../components/Container'
import { Form } from './components/Form'
import { SelectedItems } from './components/SelectedItems'
import {
  CartContainer,
  EmptyContainer,
  SectionCartContainer,
  Title,
} from './styles'
import { CartContext } from '../../contexts/CartContexts'
import { Link } from 'react-router-dom'

export function Cart() {
  const { cart } = useContext(CartContext)

  const hasItemsInCart = cart.length > 0

  return (
    <Container>
      {hasItemsInCart ? (
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
