import { CoffeeInCart } from '../../contexts/CartContexts'
import { coffeesList } from '../../data/coffeeslist'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface CartState {
  cart: CoffeeInCart[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const currentCoffeeIndex = state.cart.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      if (currentCoffeeIndex !== -1) {
        return produce(state, (draft) => {
          draft.cart[currentCoffeeIndex].quantity++
        })
      } else {
        return produce(state, (draft) => {
          draft.cart.push({
            ...coffeesList.filter(
              (coffee) => coffee.id === action.payload.id,
            )[0],
            quantity: 1,
          })
        })
      }
    }

    case ActionTypes.SUB_COFFEE: {
      const currentCoffeeIndexByID = state.cart.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      return produce(state, (draft) => {
        if (draft.cart[currentCoffeeIndexByID].quantity <= 1) {
          draft.cart.splice(currentCoffeeIndexByID, 1)
        } else {
          draft.cart[currentCoffeeIndexByID].quantity--
        }
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const currentCoffeeIndexByID = state.cart.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      return produce(state, (draft) => {
        draft.cart.splice(currentCoffeeIndexByID, 1)
      })
    }

    case ActionTypes.REMOVE_ALL_COFFEES: {
      return produce(state, (draft) => {
        draft.cart = []
      })
    }

    default:
      return state
  }
}
