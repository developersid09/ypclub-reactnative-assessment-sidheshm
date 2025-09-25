import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type Item = { id: number; title: string; body?: string };

export const fetchItems = createAsyncThunk('items/fetch', async (page) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
  );
  return res.data as Item[];
});

type ItemsState = {
  items: Item[];
  loading: boolean;
  error?: string | null;
  page: number;
};

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    reset: (state) => {
      state.items = [];
      state.page = 1;
      state.error = null;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to load';
      });
  },
});

export const { reset, incrementPage } = itemsSlice.actions;
export default itemsSlice.reducer;
