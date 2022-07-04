import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const call = async () => {
    const { onComplete = null, headers, delay = null, ...rest } = options;
    setState((s) => ({ ...s, loading: true, error: false }));
    delay && (await new Promise((resolve) => setTimeout(resolve, delay)));
    try {
      const resp = await fetch(url, {
        ...rest,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
      const data = await resp.json();
      setState((s) => ({ ...s, data }));
      onComplete && onComplete(data);
    } catch (e) {
      setState((s) => ({ ...s, error: e, loading: false }));
    } finally {
      setState((s) => ({ ...s, loading: false }));
    }
  };
  useEffect(() => {
    call();
  }, []);
  return state;
};

export default useFetch;
