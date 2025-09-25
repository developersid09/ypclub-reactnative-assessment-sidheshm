import AsyncStorage from '@react-native-async-storage/async-storage';

// action types
const SET_ORDERS = 'orders/SET_ORDERS';
const ADD_ORDER = 'orders/ADD_ORDER';

const initialState = { orders: [] };

export default function ordersReducer(state=initialState, action) {
  switch(action.type){
    case SET_ORDERS: return { ...state, orders: action.payload };
    case ADD_ORDER: return { ...state, orders: [action.payload, ...state.orders] };
    default: return state;
  }
}

export const loadOrders = () => async dispatch => {
  try {
    const raw = await AsyncStorage.getItem('orders');
    const orders = raw ? JSON.parse(raw) : [];
    dispatch({ type: SET_ORDERS, payload: orders });
  } catch(e) { /* ignore */ }
};

export const createOrder = (order) => async dispatch => {
  try {
    const raw = await AsyncStorage.getItem('orders');
    const orders = raw ? JSON.parse(raw) : [];
    const newOrders = [order, ...orders];
    await AsyncStorage.setItem('orders', JSON.stringify(newOrders));
    dispatch({ type: ADD_ORDER, payload: order });
  } catch(e) {
    throw e;
  }
};
