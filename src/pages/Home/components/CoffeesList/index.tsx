import { CatalogCard } from '../../../../components/CatalogCard'
import { Container } from '../../../../components/Container'
import { coffeesList } from '../../../../data/coffeeslist'

import { CoffeesListContainer, CoffeesListWrapper } from './styles'

export function CoffeesList() {
  return (
    <Container>
      <CoffeesListWrapper>
        <h2>Nossos cafés</h2>

        <CoffeesListContainer>
          {coffeesList.map((coffee) => (
            <CatalogCard coffee={coffee} key={coffee.id} />
          ))}
        </CoffeesListContainer>
      </CoffeesListWrapper>
    </Container>
  )
}
