export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  SUB_COFFEE = 'SUB_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  REMOVE_ALL_COFFEES = 'REMOVE_ALL_COFFEES',
}

export function addCoffee(id: number) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      id,
    },
  }
}

export function subCoffee(id: number) {
  return {
    type: ActionTypes.SUB_COFFEE,
    payload: {
      id,
    },
  }
}

export function removeCoffee(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export function removeAllCoffees() {
  return {
    type: ActionTypes.REMOVE_ALL_COFFEES,
  }
}
