import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { fetchItems, incrementPage, Item } from '../slices/itemsSlice';


type ItemsState = {
  items: Item[];
  loading: boolean;
  error?: string | null;
  page: number;
};

export function useItems() {
  const dispatch = useAppDispatch();
  const { items, loading, error, page } = useSelector(
    (s: RootState) => s.items
  );

  useEffect(() => {
    if (items.length === 0) dispatch(fetchItems(1));
  }, [dispatch]);

  const refresh = useCallback(() => {
    dispatch(fetchItems(1));
  }, [dispatch]);

  const loadMore = useCallback(() => {
    const next = page + 1;
    dispatch(incrementPage());
    dispatch(fetchItems(next));
  }, [dispatch, page]);

  return { items, loading, error, refresh, loadMore };
}
