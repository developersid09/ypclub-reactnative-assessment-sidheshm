import { fetchProducts } from '../utils/mockApi';

// action types
const SET_PRODUCTS = 'products/SET_PRODUCTS';
const SET_ERROR = 'products/SET_ERROR';

const initialState = { data: [], categories: [], error: null };

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case SET_PRODUCTS: return { ...state, data: action.payload.products, categories: action.payload.categories, error: null };
    case SET_ERROR: return { ...state, error: action.payload };
    default: return state;
  }
}

export const loadProducts = () => async dispatch => {
  try {
    const { products, categories } = await fetchProducts();
    dispatch({ type: SET_PRODUCTS, payload: { products, categories }});
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message || 'Failed to load products' });
  }
};
