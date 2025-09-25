import AsyncStorage from '@react-native-async-storage/async-storage';
import { mockApiRegister, mockApiLogin } from '../utils/mockApi';

// actions types
const SET_USER = 'auth/SET_USER';
const LOGOUT = 'auth/LOGOUT';

const initialState = { token: null, user: null, loading: false, error: null };

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER: return { ...state, token: action.payload.token, user: action.payload.user, error: null };
    case LOGOUT: return initialState;
    default: return state;
  }
}

export const login = (email, password) => async dispatch => {
  try {
    const res = await mockApiLogin(email, password);
    await AsyncStorage.setItem('token', res.token);
    await AsyncStorage.setItem('user', JSON.stringify(res.user));
    dispatch({ type: SET_USER, payload: res });
  } catch (e) {
    throw e;
  }
};

export const register = (name, email, password) => async dispatch => {
  try {
    const res = await mockApiRegister(name, email, password);
    await AsyncStorage.setItem('token', res.token);
    await AsyncStorage.setItem('user', JSON.stringify(res.user));
    dispatch({ type: SET_USER, payload: res });
  } catch (e) {
    throw e;
  }
};

export const restoreAuth = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    if (token && user) {
      dispatch({ type: SET_USER, payload: { token, user: JSON.parse(user) }});
    }
  } catch (e) {
    // ignore
  }
};

export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
  dispatch({ type: LOGOUT });
};
