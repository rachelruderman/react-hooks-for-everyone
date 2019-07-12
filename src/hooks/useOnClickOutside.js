import { useEffect } from 'react';

// More hooks at https://www.usehooks.com
export const useOnClickOutside = (ref, onClick) => {
    useEffect(() => {
        const listener = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClick();
            }
        }

        // on mount, we're adding these event listeners:
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
    }, []);
};