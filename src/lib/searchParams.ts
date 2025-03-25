import { useSearchParams } from "react-router-dom";

export function getSearchParams() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchParams] = useSearchParams();
    return Object.fromEntries([...searchParams]);
  }