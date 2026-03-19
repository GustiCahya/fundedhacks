import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { activeFilterAtom, searchQueryAtom, sortOrderAtom } from '@/atoms/filters';
import { Deal } from '@/types/deal';

export function useDeals() {
  const filter = useAtomValue(activeFilterAtom);
  const search = useAtomValue(searchQueryAtom);
  const sort = useAtomValue(sortOrderAtom);

  return useQuery({
    queryKey: ['deals', filter, search, sort],
    queryFn: async (): Promise<Deal[]> => {
      const res = await fetch(`/api/deals?filter=${filter}&search=${encodeURIComponent(search)}&sort=${sort}`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}
