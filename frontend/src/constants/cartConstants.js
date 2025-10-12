// 🛒 Tipos de acciones para el carrito
export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
}

// 🛒 Estado inicial
export const initialState = {
  items: [],
  total: 0,
  itemCount: 0
}