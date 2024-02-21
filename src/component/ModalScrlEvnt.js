import { useCallback } from 'react';

export const useScrollTo = () => {
	const scrollTo = useCallback((ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, []);
	return { scrollTo };
};
