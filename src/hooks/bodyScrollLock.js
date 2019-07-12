import { useLayoutEffect } from 'react';

export const useBodyScrollLock = () => {
    // Waits for the DOM to be fully rendered
    // Good for waiting for width/height of element
    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        // When the effects of the hook go away, the return function is run
        return () => {
            document.body.style.overflow = '';
        }
    })
};