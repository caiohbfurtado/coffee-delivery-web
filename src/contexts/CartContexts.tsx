import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee } from '../data/coffeeslist'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addCoffee,
  removeAllCoffees,
  removeCoffee,
  subCoffee,
} from '../reducers/cart/actions'

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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cart } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addItemToCart(id: number) {
    dispatch(addCoffee(id))
  }

  function subItemToCart(id: number) {
    dispatch(subCoffee(id))
  }

  function removeCoffeeToCart(id: number) {
    dispatch(removeCoffee(id))
  }

  const totalCart = cart.reduce((accumulator, current) => {
    return current.price * current.quantity + accumulator
  }, 0)

  function finishTheOrder() {
    dispatch(removeAllCoffees())
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
