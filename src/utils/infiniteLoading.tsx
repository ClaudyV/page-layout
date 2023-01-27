import { useState, useRef, useEffect, useCallback } from "react";
import { User } from "../shared/interfaces/user.interface";

const useInfiniteLoading = (props: { getItems: any }) => {
  const { getItems } = props;
  const [items, setItems] = useState<User[]>([]);
  const [pageToLoad, setPageToLoad] = useState(1);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = useCallback(async () => {
    const data = await getItems({
      page: pageToLoad ? pageToLoad : 1,
    });
    setHasMore(data.totalPages > pageToLoad);
    if (Array.isArray(data.data)) {
      setItems((prevItems) => [...prevItems, ...data.data]);
    }
    setPageToLoad(pageToLoad + 1);
  }, [getItems, pageToLoad]);

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }

    loadItems();
    initialPageLoaded.current = true;
  }, [loadItems]);

  return {
    items,
    hasMore,
    loadItems,
  };
};

export default useInfiniteLoading;
