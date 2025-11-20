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
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      // Si ya está en el carrito → aumentar cantidad
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return calculateTotals(updatedItems)
      } 
        
      // Si es nuevo, agregar al carrito
      const newItems = [...state.items, { ...action.payload, quantity: 1 }];
      return calculateTotals(newItems)
    }

    case CART_ACTIONS.REMOVE_ITEM:{
      const filteredItems = state.items.filter(item => item.id !== action.payload)
      return calculateTotals(filteredItems)
    }

    case CART_ACTIONS.UPDATE_QUANTITY:{
      const itemsWithUpdatedQuantity = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      return calculateTotals(itemsWithUpdatedQuantity)
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

  // 🛒 Cargar desde localStorage SOLO al inicio
  useEffect(() => {
    const savedCart = localStorage.getItem('madebyjane-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('❌ Error loading cart:', error);
      }
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

  // 🛒 Acciones del carrito públicas
  const addToCart = (product) =>
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product })

  const removeFromCart = (productId) =>
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId })

  const updateQuantity = (productId, quantity) => 
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } });
  
  const clearCart = () => 
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  
  // 🟨 Valores expuestos
  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}