const redux = require('redux')
const produce = require('immer').produce
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

//action
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(quantity = 1) {
  return {
    type: CAKE_ORDERED,
    payload: { quantity: 1 },
  }
}

function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: { quantity: quantity },
  }
}
function orderIceCream(quantity = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: { quantity: quantity },
  }
}
function restockIceCream(quantity = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: { quantity: quantity },
  }
}

//reducer
// const intialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams: 20,
}
//(previousState,action) =>newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      // return {
      //   ...state,
      //   numOfCakes: state.numOfCakes - action.payload.quantity,
      // };
      return produce(state, (draft) => {
        draft.numOfCakes = state.numOfCakes - action.payload.quantity
      })
    case CAKE_RESTOCKED:
      // return {
      //   ...state,
      //   numOfCakes: state.numOfCakes + action.payload.quantity,
      // };
      return produce(state, (draft) => {
        draft.numOfCakes = state.numOfCakes + action.payload.quantity
      })
    default:
      return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload.quantity,
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload.quantity,
      }
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      }
    default:
      return state
  }
}

// store
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger))
console.log(`Initial state:`, store.getState())
const unsuscribe = store.subscribe(() => {})

const action = redux.bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
)
action.orderCake()
// action.orderCake()
// action.orderCake()

// action.orderIceCream()
// action.orderIceCream()

// action.restockCake(3)
// action.restockIceCream(2)
unsuscribe()
