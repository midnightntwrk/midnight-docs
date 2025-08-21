import { useEffect, useState } from "react";

export default function useIsMounted() {
  const [_isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return _isMounted;
}
