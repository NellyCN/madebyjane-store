import { createContext, useReducer, useEffect } from 'react'
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
  }
}

// 🛒 Reducer para manejar el estado del carrito
function cartReducer(state, action) {
  console.log('🎯 Reducer action:', action.type, action.payload);
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:{
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        // Si ya existe, aumentar cantidad
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return calculateTotals(updatedItems)
      } else {
        // Si es nuevo, agregar al carrito
        const newItems = [...state.items, { ...action.payload, quantity: 1 }]
        return calculateTotals(newItems)
      }
    }

    case CART_ACTIONS.REMOVE_ITEM:{
      const filteredItems = state.items.filter(item => item.id !== action.payload)
      return calculateTotals(filteredItems)
    }

    case CART_ACTIONS.UPDATE_QUANTITY:{
      const itemsWithUpdatedQuantity = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0) // Eliminar items con cantidad 0
      
      return calculateTotals(itemsWithUpdatedQuantity)
    }

    case CART_ACTIONS.CLEAR_CART:{
      return initialState
    }

    case CART_ACTIONS.LOAD_CART:{
      console.log('🔄 Loading cart with payload:', action.payload);
      // return calculateTotals(action.payload.items);
      return action.payload;
    }
    default:{
      return state
    }
  }
}

// 🛒 Provider Component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 🛒 Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    
    console.log('🔍 Buscando carrito en localStorage...');
    const savedCart = localStorage.getItem('madebyjane-cart');
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('✅ Carrito cargado:', parsedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('❌ Error loading cart:', error);
      }
    } 
  }, []);   // 🆕 Array de dependencias VACÍO - solo se ejecuta una vez

  // 🛒 Guardar carrito en localStorage cuando cambie - SOLO si ya cargó
  useEffect(() => {
    // No guardar durante la carga inicial (evitar ciclo infinito)
    if (state === initialState) return;

    console.log('💾 Guardando carrito:', state);
    localStorage.setItem('madebyjane-cart', JSON.stringify(state))
  }, [state]);  // 🆕 Agregar hasLoaded como dependencia

  // 🛒 Acciones del carrito
  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product })
  };

  const removeFromCart = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId })
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } })
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  };

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