import { useState, useRef, useEffect } from "react";

const useInfiniteLoading = (props: any) => {
  const { getItems } = props; /* 1 */
  const [items, setItems]: any = useState([]);
  const [pageToLoad, setPageToLoad] = useState(1);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = async () => {
    const data = await getItems({
      page: pageToLoad,
    });
    setHasMore(data.totalPages > pageToLoad);
    setItems((prevItems: any) => [...prevItems, ...data.data]);
    setPageToLoad(pageToLoad + 1);
  };

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
