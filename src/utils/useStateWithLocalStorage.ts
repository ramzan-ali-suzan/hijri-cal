import { useEffect, useState } from 'react';
export default function useStateWithLocalStorage(localStorageKey: string) {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey) || ''
      );
    
      useEffect(() => {
        localStorage.setItem(localStorageKey, value);
      }, [value]);
    
      return [value, setValue] as const;
  }