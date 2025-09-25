// simple cart: items array {productId, qty, productSnapshot}
const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const UPDATE_QTY = 'cart/UPDATE';
const CLEAR = 'cart/CLEAR';

const initialState = { items: [] };

export default function cartReducer(state = initialState, action) {
  switch(action.type) {
    case ADD: {
      const { item } = action.payload;
      const exist = state.items.find(i => i.productId === item.productId);
      if (exist) {
        return { ...state, items: state.items.map(i => i.productId === item.productId ? { ...i, qty: i.qty + item.qty } : i )};
      }
      return { ...state, items: [...state.items, item] };
    }
    case REMOVE:
      return { ...state, items: state.items.filter(i => i.productId !== action.payload.productId) };
    case UPDATE_QTY:
      return { ...state, items: state.items.map(i => i.productId === action.payload.productId ? { ...i, qty: action.payload.qty } : i) };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}

export const addToCart = (product, qty = 1) => ({ type: ADD, payload: { item: { productId: product.id, qty, product }}});
export const removeFromCart = productId => ({ type: REMOVE, payload: { productId }});
export const updateQty = (productId, qty) => ({ type: UPDATE_QTY, payload: { productId, qty }});
export const clearCart = () => ({ type: CLEAR });
