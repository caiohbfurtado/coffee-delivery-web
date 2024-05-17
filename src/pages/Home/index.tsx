import { HomeContainer } from './styles'

import { Hero } from './components/Hero'
import { CoffeesList } from './components/CoffeesList'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <CoffeesList />
    </HomeContainer>
  )
}
