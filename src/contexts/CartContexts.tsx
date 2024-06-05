import { ReactNode, createContext, useState } from 'react'
import { Coffee, coffeesList } from '../data/coffeeslist'

export type CoffeeInCart = Coffee & {
  quantity: number
}

type CartContextType = {
  cart: CoffeeInCart[]
  totalCart: number
  addItemToCart: (id: number) => void
  subItemToCart: (id: number) => void
  removeCoffeeToCart: (id: number) => void
  finishTheOrder: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeInCart[]>([])

  function addItemToCart(id: number) {
    const hasInCart = cart.find((coffee) => coffee.id === id)

    if (hasInCart) {
      const newCart = cart.map((coffee) =>
        coffee.id === id
          ? { ...coffee, quantity: coffee.quantity + 1 }
          : coffee,
      )

      setCart(newCart)
    } else {
      const newCoffeeInfo: CoffeeInCart = {
        ...coffeesList.filter((coffee) => coffee.id === id)[0],
        quantity: 1,
      }

      setCart((prevState) => [...prevState, newCoffeeInfo])
    }
  }

  function subItemToCart(id: number) {
    const hasInCart = cart.find((coffee) => coffee.id === id)

    if (hasInCart && hasInCart.quantity >= 2) {
      const newCart = cart.map((coffee) =>
        coffee.id === id
          ? { ...coffee, quantity: coffee.quantity - 1 }
          : coffee,
      )

      setCart(newCart)
    } else if (hasInCart && hasInCart.quantity === 1) {
      const newCart = cart.filter((coffee) => coffee.id !== id)

      setCart(newCart)
    } else {
      const newCoffeeInfo: CoffeeInCart = {
        ...coffeesList.filter((coffee) => coffee.id === id)[0],
        quantity: 1,
      }

      setCart((prevState) => [...prevState, newCoffeeInfo])
    }
  }

  function removeCoffeeToCart(id: number) {
    setCart((prevState) => prevState.filter((coffee) => coffee.id !== id))
  }

  const totalCart = cart.reduce((accumulator, current) => {
    return current.price * current.quantity + accumulator
  }, 0)

  function finishTheOrder() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        subItemToCart,
        removeCoffeeToCart,
        totalCart,
        finishTheOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
