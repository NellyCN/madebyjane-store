import { createContext, useReducer, useEffect, useState } from 'react'
import { CART_ACTIONS, initialState} from '../constants/cartConstants';

// 🛒 Crear Context
export const CartContext = createContext();

// 🛒 Función helper para calcular totales
function calculateTotals(items) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  return {
    items,
    itemCount,
    total: parseFloat(total.toFixed(2))
  };
}

// 🛒 Reducer para manejar el estado del carrito
function cartReducer(state, action) {
  switch (action.type) {
    
    case CART_ACTIONS.ADD_ITEM:{
      const incomingItem = action.payload;

      // KEY POINT: Usar cartItemId para distinguir variantes (producto + variantes)
      const existingItem = state.items.find(item => item.cartItemId === incomingItem.cartItemId);
      
      // Si ya está en el carrito → aumentar cantidad
      let updatedItems

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.cartItemId === incomingItem.cartItemId
            ? { ...item, quantity: item.quantity + incomingItem.quantity }
            : item
        )
      } else {
        // Si no está → agregar nuevo ítem
        updatedItems = [...state.items, incomingItem]
      }

        return calculateTotals(updatedItems)
      } 

    case CART_ACTIONS.REMOVE_ITEM:{
      const filteredItems = state.items.filter(item => item.cartItemId !== action.payload)
      return calculateTotals(filteredItems)
    }

    case CART_ACTIONS.UPDATE_QUANTITY:{
      const updatedItems = state.items.map(item =>
        item.cartItemId === action.payload.cartItemId
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
      return calculateTotals(updatedItems)
    }

    case CART_ACTIONS.CLEAR_CART:{
      return initialState;
    }

    case CART_ACTIONS.LOAD_CART:{
      return action.payload;
    }

    default:
      return state
    
  }
}

// 🛒 Provider Component
export function CartProvider({ children }) {

  // 🆕 Flag para indicar si ya cargamos desde localStorage
  const [hasLoaded, setHasLoaded] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  //const [items, setItems] = useState([])
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)


  // 🛒 Cargar desde localStorage SOLO al inicio
  useEffect(() => {
    const savedCart = localStorage.getItem('madebyjane-cart');
    if (savedCart) {
      dispatch({
        type: CART_ACTIONS.LOAD_CART,
        payload: JSON.parse(savedCart)
      })
    }    
    // Marcar que ya cargamos
    setHasLoaded(true); 
  }, []);   // 🆕 Array de dependencias VACÍO - solo se ejecuta una vez

  // 🛒 Guardar carrito en localStorage cuando cambie - SOLO si ya cargó
  useEffect(() => {
    // No guardar durante la carga inicial (evitar ciclo infinito)
    if (!hasLoaded) return;

    if (state.items.length === 0) {
      // 🆕 Si el carrito está vacío → también limpiamos localStorage
      localStorage.removeItem('madebyjane-cart');
    } else {
      localStorage.setItem('madebyjane-cart', JSON.stringify(state));
    }
  }, [state, hasLoaded]);  // 🆕 Agregar hasLoaded como dependencia

    // ==============================
    // 🛒 Acciones del carrito públicas
    // ==============================
    const addToCart = (cartItem) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: cartItem })
    setIsMiniCartOpen(true) // 🔥 auto-open minicart
  }

  const removeFromCart = (cartItemId) =>
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: cartItemId })

  const updateQuantity = (cartItemId, quantity) => 
    dispatch({ 
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { cartItemId, quantity }
    });
  
  const clearCart = () => 
    dispatch({ type: CART_ACTIONS.CLEAR_CART });

  return (
    <CartContext.Provider 
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isMiniCartOpen,
        setIsMiniCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}